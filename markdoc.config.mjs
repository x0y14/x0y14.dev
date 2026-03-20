import { defineMarkdocConfig, component } from "@astrojs/markdoc/config"

export default defineMarkdocConfig({
  nodes: {
    fence: {
      render: component("./src/components/CodeBlock.astro"),
      attributes: {
        language: { type: String },
        content: { type: String },
      },
    },
  },
  tags: {
    alert: {
      render: component("./src/components/Alert.astro"),
      attributes: {
        type: {
          type: String,
          default: "note",
          matches: ["note", "tip", "important", "warning", "caution"],
        },
      },
    },
    image: {
      render: component("./src/components/Image.astro"),
      selfClosing: true,
      attributes: {
        src: { type: String, required: true },
        alt: { type: String },
        width: { type: String },
        height: { type: String }
      },
    },
    gif: {
      render: component("./src/components/Image.astro"),
      selfClosing: true,
      attributes: {
        src: { type: String, required: true },
        alt: { type: String },
        width: { type: String },
        height: { type: String }
      },
    },
    video: {
      render: component("./src/components/Video.astro"),
      selfClosing: true,
      attributes: {
        src: { type: String, required: true },
        width: { type: String },
        height: { type: String }
      },
    },
  },
})
