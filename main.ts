// Writes the brave text to /output/entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const text = `The river moves.
The stone does not.

It lets the water pass.
It stays.

Cool. Certain. Still.

You are the stone.
The river is only passing.`;

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
if ([...text].length < 1 || [...text].length > 280) {
  throw new Error("text must be 1..280 code points");
}
fs.writeFileSync(outFile, text, "utf8");
