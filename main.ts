// Fridge Roast: One Line, Biggest Laugh
// Writes a single roast line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge updated itself at 3 a.m., rebooted, and forgot it was a fridge — now it's a $3,000 tablet that keeps my food cold by accident.";

// The gate rejects anything over 200 characters: fail loudly, never silently.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`roast line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
