import { workspace } from "vscode";
import { DefaultConfig, PagesConfig } from "../types";

type ConfigReturnType = {
  default: DefaultConfig;
  pages: PagesConfig;
};

export const getConfig = <T extends keyof ConfigReturnType>(type: T) =>
  workspace.getConfiguration("NextjsBoilerplateGenerator").get<ConfigReturnType[T]>(type);
