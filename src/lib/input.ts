import { FileType, window, workspace } from "vscode";
import { getConfig } from "./config";
import { parseUriWithRoot } from "./uri";

export const getPagesName = async () => {
  const pagesName = await window.showInputBox({
    prompt: "Please enter Page dir name. ex) post/[id]"
  });

  if (!pagesName || pagesName.length === 0) {
    throw new Error("Pages name can not be empty");
  }

  return pagesName;
};

export const getDomainName = async () => {
  let domainName = await window.showInputBox({
    prompt: "Please enter Domain name. ex) PostDetail"
  });

  if (!domainName) {
    throw new Error("Domain name can not be empty");
  }

  domainName = domainName.replace(/[^A-Za-z]/g, "");

  if (domainName === "") {
    throw new Error("Domain name can only be in English.");
  }

  return domainName;
};

export const selectMonorepoPackage = async () => {
  const { monorepo } = getConfig("default");

  try {
    const repositories = await Promise.all(
      monorepo.map((repo) =>
        workspace.fs
          .readDirectory(parseUriWithRoot(repo))
          .then((dir) =>
            dir.flatMap<string>((v) => (v[1] === FileType.Directory ? `${repo}/${v[0]}` : ""))
          )
      )
    );

    const repository = await window.showQuickPick(repositories.flat());

    return repository + "/";
  } catch (err) {
    throw new Error("settings `monorepo` is not invalid, check your config");
  }
};
