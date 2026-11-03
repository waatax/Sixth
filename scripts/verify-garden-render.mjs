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
  const { default: LearningGarden, GardenLesson } = await vite.ssrLoadModule(
    "/src/pages/LearningGarden.jsx",
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
  const render = (url, Component, route) =>
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
            React.createElement(Route, {
              path: route,
              element: React.createElement(Component),
            }),
          ),
        ),
      ),
    );
  for (let grade = 1; grade <= 6; grade++) {
    const html = render(`/?grade=${grade}`, LearningGarden, "/");
    assert.ok(html.includes("小小學習島") && html.includes("教材範圍"));
    assert.equal(
      (html.match(/class="garden-lesson-card"/g) || []).length,
      grade <= 2 ? 4 : 8,
    );
    assert.equal((html.match(/class="garden-mobile-nav"/g) || []).length, 1);
    assert.ok(!html.includes("NaN") && !html.includes("undefined"));
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, "No duplicate document IDs");
  }
  for (const lesson of gardenLessons) {
    const html = render(
      `/explore/${lesson.id}`,
      GardenLesson,
      "/explore/:lessonId",
    );
    assert.ok(html.includes(lesson.title), lesson.id);
    assert.ok(
      html.includes(lesson.goal) && html.includes(lesson.trap),
      lesson.id,
    );
    assert.ok(
      html.includes("<figure") &&
        html.includes("<figcaption") &&
        html.includes("<caption>"),
      lesson.id,
    );
    assert.equal((html.match(/<h1\s/g) || []).length, 1, lesson.id);
    assert.ok(html.includes("我讀懂了，試試看"));
    assert.ok(!html.includes("NaN") && !html.includes("undefined"), lesson.id);
  }
  assert.ok(
    render("/explore/missing", GardenLesson, "/explore/:lessonId").includes(
      "還沒有這個主題",
    ),
  );
  console.log(
    "PASS: 6 grade homepages, 40 React lesson routes, missing-route fallback, unique IDs, semantic diagrams/tables, disabled storage at application root. Visual browser QA remains separate.",
  );
} finally {
  await vite.close();
}
