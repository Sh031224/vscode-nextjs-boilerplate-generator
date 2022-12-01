import { Uri, workspace } from "vscode";

export const parseUriWithRoot = (content: string) =>
  Uri.parse(`${workspace.workspaceFolders[0].uri}/${content}`);
