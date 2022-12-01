export type DefaultConfig = {
  structure: string[];
  monorepo: string[];
};

export type PagesConfig = {
  dir: string;
  filename: string;
  extension: "tsx" | "js" | "jsx";
};
