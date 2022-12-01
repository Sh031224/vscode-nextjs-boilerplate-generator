import { window } from "vscode";

export const logger = (type: "success" | "warning" | "error", msg: string = "") => {
  switch (type) {
    case "success":
      return window.setStatusBarMessage(`Success: ${msg}`, 5000);
    case "warning":
      return window.showWarningMessage(`Warning: ${msg}`);
    case "error":
      return window.showErrorMessage(`Failed: ${msg}`);
  }
};
