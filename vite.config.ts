import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      plugins: [react()],
      build: {
        outDir: "lib",
      },
    };
  }

  return {
    plugins: [react()],
    build: {
      outDir: "docs",
    },
  };
});
