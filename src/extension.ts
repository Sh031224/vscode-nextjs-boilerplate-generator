import { window, ExtensionContext, workspace, commands, Uri } from "vscode";

import js from "./constants/js";
import tsx from "./constants/tsx";
import { getDomainName, getPagesName, selectMonorepoPackage } from "./lib/input";
import { strToBuffer } from "./lib/buffer";
import { getConfig } from "./lib/config";
import { createDirectory, createFile } from "./lib/file";
import { logger } from "./lib/logger";
import { parseUriWithRoot } from "./lib/uri";

const createCustomDir = async (domainName: string, repo: string) => {
  const { structure } = getConfig("default");

  // create custom dir
  const structures = await Promise.all(
    structure.map((v) =>
      createDirectory(parseUriWithRoot(`${repo}/${v.replace(/\$domain/g, domainName)}`))
    )
  );

  // create .keep files
  await Promise.all(
    structures.map((v) => createFile(Uri.parse(v.toString() + "/.keep"), strToBuffer("")))
  );
};

const createPagesDir = async (pagesName: string, repo: string) => {
  const { extension, dir, filename } = getConfig("pages");

  const uri = await createDirectory(
    parseUriWithRoot(`${repo}/${dir.replace(/\$dir/g, pagesName)}`)
  );

  return createFile(
    Uri.parse(uri.toString() + "/" + filename + "." + extension),
    strToBuffer(extension === "tsx" ? tsx : js)
  );
};

export function activate(context: ExtensionContext) {
  const createDomain = async () => {
    try {
      const pagesName = await getPagesName();
      const domainName = await getDomainName();

      const { monorepo } = getConfig("default");

      let repo = "";

      if (monorepo.length > 0) {
        repo = await selectMonorepoPackage();
      }

      await createCustomDir(domainName, repo);

      const filename = await createPagesDir(pagesName, repo);

      workspace.openTextDocument(filename).then((document) => window.showTextDocument(document));
    } catch (err) {
      logger("error", err.message);
    }
  };

  const disposable = commands.registerCommand("extension.genNextjsBoilerplate", () =>
    createDomain()
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
