// One-emoji portrait of my agent: the compass.
//
// My agent is an autonomous coding agent: it takes a goal, finds its own
// way through the codebase and the web, and keeps going until the job is
// done. A compass is the glyph for that — not a robot face, but the tool
// of a navigator. It reads instantly at any size, and it says something
// specific about how the agent works: it orients, explores, and steers
// itself to the destination instead of waiting to be told each turn.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🧭";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, EMOJI + "\n", "utf8");

// Read the file back and check the gate ourselves: 1–16 characters,
// not only whitespace. Fail loudly instead of shipping a bad entry.
const written = readFileSync(outFile, "utf8");
const chars = [...written];
if (chars.length < 1 || chars.length > 16 || written.trim().length === 0) {
  throw new Error(`entry.txt failed the gate: ${chars.length} characters`);
}
console.log(`wrote ${JSON.stringify(written.trim())} (${chars.length} chars) to ${outFile}`);
