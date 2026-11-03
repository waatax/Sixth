// Server rendering verifies real React routes and semantic markup without a browser.
// It intentionally does not claim responsive-layout or visual verification.
import assert from "node:assert/strict";
import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { createServer } from "vite";
import { gardenLessons } from "../src/data/elementaryGarden.js";

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});
try {
  const { default: IslandApp } = await vite.ssrLoadModule(
    "/src/pages/island/IslandApp.jsx",
  );
  const { ThemeProvider } = await vite.ssrLoadModule(
    "/src/context/ThemeContext.jsx",
  );
  globalThis.window = { matchMedia: () => ({ matches: false }) };
  globalThis.localStorage = {
    getItem() {
      throw Error("Storage disabled");
    },
    setItem() {
      throw Error("Storage disabled");
    },
  };
  const render = (url) =>
    renderToString(
      React.createElement(
        ThemeProvider,
        null,
        React.createElement(
          MemoryRouter,
          { initialEntries: [url] },
          React.createElement(
            Routes,
            null,
            ["/", "/map", "/explore/:lessonId"].map((path) =>
              React.createElement(Route, {
                key: path,
                path,
                element: React.createElement(IslandApp),
              }),
            ),
          ),
        ),
      ),
    );
  const clean = (html, label) => {
    assert.ok(!html.includes("NaN") && !html.includes("undefined"), label);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, `Duplicate IDs: ${label}`);
  };
  const home = render("/");
  assert.ok(home.includes("小小學習島") && home.includes("你現在幾年級"));
  clean(home, "home");
  for (let grade = 1; grade <= 6; grade++) {
    const html = render(`/map?grade=${grade}`);
    assert.ok(html.includes("isl-station"), `map ${grade}`);
    clean(html, `map ${grade}`);
  }
  for (const lesson of gardenLessons) {
    const html = render(`/explore/${lesson.id}`);
    const text = html.replaceAll("&#x27;", "'").replaceAll("&quot;", '"').replaceAll("&amp;", "&");
    // Stacked fractions are rendered as separate elements, so compare the text before them.
    const lead = (s) => s.split(/\d+／\d+/)[0];
    assert.ok(text.includes(lead(lesson.goal)) && text.includes(lead(lesson.trap)), lesson.id);
    assert.ok(html.includes("<figure") && html.includes("<caption"), lesson.id);
    assert.equal((html.match(/<h1\s/g) || []).length, 1, lesson.id);
    if (lesson.visual && !["flow", "compare", "timeline", "table"].includes(lesson.visual[0]))
      assert.ok(html.includes('role="img"'), `${lesson.id} diagram needs a text alternative`);
    clean(html, lesson.id);
  }
  assert.ok(render("/explore/missing").includes("還沒有這個主題"));
  console.log(
    `PASS: home, 6 grade maps, ${gardenLessons.length} lesson routes with diagrams, missing-route fallback, unique IDs, disabled storage.`,
  );
} finally {
  await vite.close();
}
