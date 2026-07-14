import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../out/", import.meta.url));
const repositoryBasePath = "/construart_engenharia";

async function rewriteAssetPaths(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewriteAssetPaths(path);
    } else if (/\.(?:html|css|js)$/i.test(entry.name)) {
      const source = await readFile(path, "utf8");
      const updated = source.replace(
        /(?<!construart_engenharia)\/assets\//g,
        `${repositoryBasePath}/assets/`,
      );
      if (updated !== source) await writeFile(path, updated);
    }
  }
}

await rewriteAssetPaths(outputDirectory);
