import { Uri, workspace } from "vscode";

export const createDirectory = async (uri: Uri) => {
  await workspace.fs.createDirectory(uri);

  return uri;
};

export const createFile = async (uri: Uri, content: Uint8Array) => {
  await workspace.fs.writeFile(uri, content);

  return uri;
};
