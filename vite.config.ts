import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      plugins: [react(), dts({ tsconfigPath: "./tsconfig.lib.json" })],
      build: {
        lib: {
          entry: resolve(__dirname, "lib/index.ts"),
          name: "megatizerui",
          fileName: "megatizerui",
          formats: ["es"],
        },
        outDir: "dist-lib",
        copyPublicDir: false,
        rollupOptions: {
          external: ["react", "react/jsx-runtime"],
        },
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
