import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import mdx from "@mdx-js/rollup"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  plugins: [mdx(), preact(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "../dist",
  },
})
