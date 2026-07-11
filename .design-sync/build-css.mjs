// Compile the Tartiner Labs DS stylesheet and stage it where the converter can
// reach it. Run from the repo root BEFORE package-build.mjs / resync.mjs on
// every sync (it's cfg.buildCmd):
//
//   node .design-sync/build-css.mjs
//
// Why the stage step: cfg.cssEntry is resolved relative to the bundled package
// (node_modules/@heroui/react) and bounded to that package dir for security, so
// a repo-relative path can't reach it. We compile the durable, committed copy
// under .design-sync/ and copy it into the package's dist/ so the
// package-relative cssEntry ("dist/tartiner-styles.css") resolves. node_modules
// is regenerated per install; this script re-stages it every run.
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";

const CLI = ".ds-sync/node_modules/@tailwindcss/cli/dist/index.mjs";
const SRC = ".design-sync/css-src/globals.css";
const OUT = ".design-sync/tartiner-styles.css";
const STAGE = "node_modules/@heroui/react/dist/tartiner-styles.css";

if (!existsSync(CLI)) {
  console.error(
    `✗ Tailwind CLI missing at ${CLI} — run: (cd .ds-sync && npm i @tailwindcss/cli@4.3.0)`,
  );
  process.exit(1);
}
execFileSync(process.execPath, [CLI, "-i", SRC, "-o", OUT], {
  stdio: "inherit",
});
copyFileSync(OUT, STAGE);
console.error(`✓ compiled ${OUT} and staged → ${STAGE}`);
