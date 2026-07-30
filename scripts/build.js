import { cpSync, existsSync, rmSync } from "node:fs";

if (!existsSync("src/index.html")) {
  throw new Error("Build failed: src/index.html file not found.");
}

rmSync("dist", {
  recursive: true,
  force: true
});

cpSync("src", "dist", {
  recursive: true
});

console.log("Build completed successfully.");