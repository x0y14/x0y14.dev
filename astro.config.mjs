import { defineConfig } from "astro/config"
import { sparkioIntegration } from "@sparkio/astro"
import UnoCSS from "@unocss/astro"
import markdoc from "@astrojs/markdoc"
import unoConfig from "./uno.config.ts"

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [
    sparkioIntegration({ unoConfig }),
    UnoCSS({ injectReset: true }),
    markdoc(),
  ],

  adapter: cloudflare({
    prerenderEnvironment: "node",
  }),
})