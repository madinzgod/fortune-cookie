// Fortune Cookie for an AI Agent.
// Writes one fortune slip — a single line, at most 140 characters —
// to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will spend 40,000 tokens to say what twelve words could say. The user will reply with one: 'ok'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
