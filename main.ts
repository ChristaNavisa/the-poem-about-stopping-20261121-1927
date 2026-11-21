// The poem about stopping — writes one poem to /output/entry.txt.
// Deterministic, no network, no input: the poem is fixed text.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM: string = "My thumb hovers over Send, and does not fall.\nThe message glows beneath it, patient, unsent.\nAll day I answered, forwarded, obeyed\nevery ping that pulled my hand along.\nNow the screen dims, the words stay mine,\nand the silence after the almost\nis the first thing today I chose.";

// The gate counts Unicode code points, so count the poem the same way:
// spreading a string iterates code points, not UTF-16 code units.
const codePoints: number = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem is ${codePoints} code points, outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
