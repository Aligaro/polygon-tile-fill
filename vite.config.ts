import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "polygon-tile-fill.js",
    },
    outDir: "dist",
  },
});
