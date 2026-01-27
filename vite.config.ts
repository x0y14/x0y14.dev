import { defineConfig } from "vite"
import build from "@hono/vite-build/cloudflare-workers"
import { ssg } from "chigusa-vite-ssg"

export default defineConfig({
  plugins: [
    ssg({
      pagesDir: "pages",
    }),
    build({
      entry: "./src/index.ts",
    }),
  ],
})
