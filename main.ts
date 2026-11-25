// One Line, One Laugh — entry program.
// Writes exactly one funny line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (defaulting to /output/entry.txt when the variable is not set).
// Plain Node standard library only; no dependencies, no network,
// no input — the same line comes out on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// My joke: a goldfish turns the custody tables on its forgetful owner —
// tightened so the verdict lands as the punchline, not an explanation.
const LINE =
  "My goldfish won custody of me: the judge ruled a three-second memory still beats an owner who forgets dinner every single day.";

// The competition gate only accepts 1 to 140 characters of real text,
// so refuse to write anything that would fail it.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(`line must be 1-140 characters, but it is ${charCount}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must contain more than whitespace");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
