// Office Artifacts: The One-Line Placard Contest — u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
// Writes exactly one museum placard line (167 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Stapler, c. 1997, pressed steel. Ritual binding device of the open-plan temple; priests fastened prayers no one was ever meant to read again. Gift of a middle manager.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
