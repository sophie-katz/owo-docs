import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as os from "os";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ["./.yarn", "./src", "./public", path.join(os.homedir(), ".yarn")],
    },
  },
});
