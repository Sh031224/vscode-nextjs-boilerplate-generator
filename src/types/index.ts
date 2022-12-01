export type DefaultConfig = {
  structure: string[];
  basePath: string;
  monorepo: string[];
};

export type PagesConfig = {
  dir: string;
  filename: string;
  extension: "tsx" | "js" | "jsx";
};
