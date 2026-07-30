import { readFileSync } from "node:fs";

const html = readFileSync("src/index.html", "utf8");

if (!html.includes("<title>")) {
  throw new Error("Test failed: HTML title is missing.");
}

if (!html.includes("styles/style.css")) {
  throw new Error("Test failed: CSS file is not connected.");
}

if (!html.includes("scripts/app.js")) {
  throw new Error("Test failed: JavaScript file is not connected.");
}

console.log("All tests passed successfully.");