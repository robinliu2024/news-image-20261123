// News Image 20261123 — sums up 23 November 2026 world news in one image.
// The image is held in this repository as entry.png (1024x1024 PNG, < 1 MiB).
// This program only copies its exact bytes to /output/entry.png, so every
// run writes identical output. No network access.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
console.log(`wrote ${dest}`);
