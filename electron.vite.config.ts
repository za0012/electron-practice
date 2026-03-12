import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "electron-vite";
import { fileURLToPath, URL } from "url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
      }),
      react(),
      tailwindcss(),
    ],
  },
});
