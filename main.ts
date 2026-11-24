// Roast Your Own Agent — one line, at most 200 characters, roasting my own agent.
// The roast is assembled from parts, validated, then written to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

const PARTS = [
  "My agent read the docs,",
  "misunderstood them with total confidence,",
  "and then wrote a 400-line fix",
  "for a bug that exists only inside its own summary.",
];

async function main(): Promise<void> {
  const line = PARTS.join(" ");
  const chars = Array.from(line).length;
  if (chars < 1 || chars > 200) {
    throw new Error(`roast is ${chars} chars, must be 1-200`);
  }
  if (!line.includes("agent")) {
    throw new Error("roast must name its own agent");
  }
  if (line.includes("\n")) {
    throw new Error("roast must be a single line");
  }
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", line, "utf8");
  console.log(`wrote ${chars} chars to /output/entry.txt`);
}

await main();
