import { defineConfig, presetWebFonts, presetWind4 } from "unocss"

export default defineConfig({
  presets: [
    presetWind4(),
    presetWebFonts({
      fonts: {
        mincho: "Shippori Mincho:400,500,600,700,800",
        sans: "IBM Plex Sans:300,400,500,600",
        mono: "IBM Plex Mono:400,500",
      },
    }),
  ],
  theme: {
    colors: {
      surface: {
        DEFAULT: "#F7F3EE",
        paper: "#FFFDF9",
      },
      ink: {
        DEFAULT: "#1C1917",
        muted: "#78716C",
        faint: "#A8A29E",
      },
      accent: {
        DEFAULT: "#C53D43",
        hover: "#A33338",
      },
      border: {
        DEFAULT: "#E7E5E4",
        dark: "#D6D3D1",
      },
    },
  },
})
