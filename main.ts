// News Image 20261123 — sums up 23 November 2026 world news in one image.
// The image is held in this repository as entry.png (1024x1024 PNG, < 1 MiB).
// This program only copies its exact bytes to /output/entry.png, so every
// run writes identical output. No network access. After copying it verifies
// the output byte-for-byte against the source, so a truncated or corrupt
// copy fails loudly instead of passing silently.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);

// The whole point of this program is byte-identical output: confirm it.
const expected = readFileSync(src);
const actual = readFileSync(dest);
if (!expected.equals(actual)) {
  throw new Error(
    `output mismatch: ${dest} (${actual.length} bytes) differs from ${src} (${expected.length} bytes)`,
  );
}
console.log(`wrote ${dest} (${actual.length} bytes, verified identical)`);
