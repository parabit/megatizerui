import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      plugins: [react()],
      build: {
        outDir: "dist-lib",
        copyPublicDir: false,
      },
    };
  }

  return {
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    plugins: [react()],
    build: {
      outDir: "dist-docs",
    },
  };
});
