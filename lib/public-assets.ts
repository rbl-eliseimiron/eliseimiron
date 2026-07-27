import fs from "node:fs";
import path from "node:path";

/** Checks whether a /public-relative path (e.g. "/images/sponsors/ride/x.png") exists on disk. */
export function publicFileExists(relativePath: string): boolean {
  const cleaned = relativePath.replace(/^\/+/, "");
  return fs.existsSync(path.join(process.cwd(), "public", cleaned));
}
