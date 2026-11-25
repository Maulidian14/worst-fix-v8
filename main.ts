import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The commit message: one line, at most 100 characters.
// A fix that made everything worse — it removed the bug
// and the feature the bug was holding up.
const entry = "fix: removed the bug and the feature it was holding up";

// Resolve paths from this file's own location so the run does not
// depend on the working directory.
const root = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";

mkdirSync(outDir, { recursive: true });
if (entry.length < 1 || entry.length > 100) {
  throw new Error(`entry must be 1-100 characters, got ${entry.length}`);
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars to ${join(outDir, "entry.txt")} (from ${root})`);
