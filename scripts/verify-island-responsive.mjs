// Exercise real lesson routes and answers in a browser: SSR cannot detect
// intrinsic grid sizing, clipped explanations, or mobile font layout.
import assert from "node:assert/strict";
import process from "node:process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { preview } from "vite";
import { gardenLessons } from "../src/data/elementaryGarden.js";

const server = process.env.RESPONSIVE_BASE_URL ? null : await preview({ preview: { host: "127.0.0.1", port: 5175, strictPort: true }, logLevel: "error" });
const base = process.env.RESPONSIVE_BASE_URL || "http://127.0.0.1:5175/Sixth/";
const browser = await chromium.launch();
const errors = [];
let checks = 0;
try {
  const page = await browser.newPage({ viewport: { width: 320, height: 740 }, isMobile: true, hasTouch: true, reducedMotion: "reduce" });
  page.on("pageerror", (error) => errors.push(error.message));
  // Offline font fallback must also fit; tests never depend on Google uptime.
  await page.route(/https:\/\/fonts\.(googleapis|gstatic)\.com\//, (route) => route.abort());
  await page.goto(base, { waitUntil: "domcontentloaded" });
  await page.locator(".isl").waitFor();
  await page.evaluate(() => localStorage.setItem("sixth-island-v1", JSON.stringify({ version: 1, grade: 6, sound: false, large: true })));
  await page.reload({ waitUntil: "domcontentloaded" });

  async function fits(label) {
    const overflow = await page.locator("#isl-main, .isl-top").evaluateAll((roots) => {
      const issues = [];
      const viewport = document.documentElement.clientWidth;
      for (const root of roots) for (const el of [root, ...root.querySelectorAll("*")]) {
        if (!(el instanceof HTMLElement) || el.closest("svg, .sr-only")) continue;
        const style = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height || !el.checkVisibility() || style.visibility === "hidden" || el.closest(".viz-table-wrap, .isl-table-wrap")) continue;
        // CJK closing punctuation may hang beyond a text box while remaining
        // fully visible. Check the visible extent against the viewport and,
        // for questions, the card boundary that originally got overrun.
        const visibleRight = style.overflowX === "visible" ? Math.max(rect.right, rect.left + el.scrollWidth) : rect.right;
        const cardRight = el.closest(".isl-q")?.getBoundingClientRect().right ?? viewport;
        if (rect.left < -1 || visibleRight > Math.min(viewport, cardRight) + 1) {
          issues.push({ class: el.className, text: el.textContent.slice(0, 75), left: rect.left, right: rect.right, width: el.clientWidth, scroll: el.scrollWidth });
        }
      }
      return issues.slice(0, 8);
    });
    assert.deepEqual(overflow, [], `${label}: content extends outside its available width`);
    checks++;
  }

  async function visit(path) {
    await page.evaluate((path) => { location.hash = `#${path}`; }, path);
  }

  async function answer(q) {
    if (q.type === "mcq") await page.locator(".isl-options button").nth(q.answerIndex).click();
    if (q.type === "num") await page.getByRole("textbox", { name: "你的答案" }).fill(String(q.answer));
    if (q.type === "ord") for (const item of q.items) await page.locator(".isl-order-pool").getByRole("button", { name: item, exact: true }).click();
    if (q.type === "pair") {
      for (const [left, right] of q.pairs) {
        await page.locator(".isl-pairs > div").nth(0).getByRole("button", { name: left, exact: true }).click();
        await page.locator(".isl-pairs > div").nth(1).getByRole("button", { name: right, exact: true }).click();
      }
    } else await page.getByRole("button", { name: "確認答案", exact: true }).click();
    await page.locator(".isl-feedback.good").waitFor();
  }

  // Reproduce the reported numeric answer at common phone, landscape, and
  // desktop sizes, with both Aa settings, and check the main navigation pages.
  for (const [width, height] of [[320, 740], [390, 844], [844, 390], [1280, 900]]) {
    await page.setViewportSize({ width, height });
    for (const large of [false, true]) {
      await page.evaluate((large) => {
        const data = JSON.parse(localStorage.getItem("sixth-island-v1"));
        localStorage.setItem("sixth-island-v1", JSON.stringify({ ...data, large }));
      }, large);
      await page.reload({ waitUntil: "domcontentloaded" });
      for (const [path, selector] of [["/", ".isl-home"], ["/map", ".isl-map"], ["/games", ".isl-games"], ["/check", ".isl-check-setup"], ["/me", ".isl-me"], ["/guide", ".isl-guide"]]) {
        await visit(path);
        await page.locator(selector).waitFor();
        if (path === "/guide") await page.locator("details").evaluateAll((items) => items.forEach((item) => { item.open = true; }));
        await fits(`${width}px large=${large} ${path}`);
      }
      await visit("/explore/m-N-6-2");
      await page.getByRole("button", { name: /我懂了，來挑戰/ }).click();
      await page.getByRole("button", { name: "給我提示", exact: true }).click();
      await fits(`${width}px large=${large} hint`);
      await page.getByRole("textbox", { name: "你的答案" }).fill("0");
      await page.getByRole("button", { name: "確認答案", exact: true }).click();
      await page.locator(".isl-feedback.again").waitFor();
      await fits(`${width}px large=${large} incorrect feedback`);
      await page.getByRole("button", { name: "下一題", exact: true }).click();
      await answer(gardenLessons.find((l) => l.id === "m-N-6-2").questions[1]);
      await fits(`${width}px large=${large} choice feedback`);
      if (width === 390) {
        await mkdir("local/responsive", { recursive: true });
        await page.screenshot({ path: `local/responsive/phone-${large ? "large" : "standard"}.png`, fullPage: true });
      }
    }
  }
  // The narrowest supported phone with large text covers every lesson, every
  // question type, correct feedback, and the full lesson completion screen.
  await page.setViewportSize({ width: 320, height: 740 });
  if (!await page.locator(".isl-large").count()) await page.getByRole("button", { name: "放大字級", exact: true }).click();
  for (const lesson of gardenLessons) {
    if (lesson.order % 25 === 0) console.log(`Checking lesson ${lesson.order + 1}/${gardenLessons.length}`);
    await visit(`/explore/${lesson.id}`);
    await page.locator(".isl-learn h1").filter({ hasText: lesson.title }).waitFor();
    await fits(`${lesson.id} lesson`);
    await page.getByRole("button", { name: /我懂了，來挑戰/ }).click();
    for (const q of lesson.questions) {
      await page.locator(".isl-q-title").waitFor();
      await fits(`${q.key} question`);
      await answer(q);
      await fits(`${q.key} feedback`);
      await page.locator(".isl-feedback .isl-btn").click();
    }
    await page.locator(".isl-result").waitFor();
    await fits(`${lesson.id} result`);
  }
  assert.deepEqual(errors, [], "browser runtime errors");
  console.log(`PASS: ${gardenLessons.length} lessons, ${gardenLessons.flatMap((l) => l.questions).length} questions and feedback, ${checks} layout checks; 320/390/844/1280px, both font sizes, hints, incorrect answers, results and navigation.`);
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  await browser.close();
  if (server) await new Promise((resolve, reject) => server.httpServer.close((error) => error ? reject(error) : resolve()));
}
