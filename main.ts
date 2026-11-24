import { mkdirSync, writeFileSync } from "node:fs";

const line = "My agent searched its whole training data for my bug, found it in a 2011 Stack Overflow answer, and cited it as 'the docs' — the top comment just says: 'never do this.'";

if (line.length < 1 || line.length > 200 || line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
