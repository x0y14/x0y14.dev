import { defineElement, css } from "@sparkio/core"

const VARIANTS: Record<string, { bgColor: string; label: string; }> = {
  note:      { bgColor: "#4A6FA5", label: "Note" },
  tip:       { bgColor: "#5B8A72", label: "Tip" },
  important: { bgColor: "#7B5EA7", label: "Important" },
  warning:   { bgColor: "#B8860B", label: "Warning" },
  caution:   { bgColor: "#C53D43", label: "Caution" },
}

const BlogAlert = defineElement(
  {
    tag: "blog-alert",
    props: {
      type: { type: String, default: "note" },
    },
    styles: css`@unocss-placeholder
:host { @apply block my-6; }
::slotted(p) {
  margin: 0 !important;
}`,
  },
  ({ type }: { type: string }) => {
    const v = VARIANTS[type] || VARIANTS.note
    return `
      <div class="border-l-3 border-solid rounded-md p-4 pl-5 mt-3 mb-3" style="background: ${v.bgColor}0D; border-left-color: ${v.bgColor};">
        <div class="flex items-center gap-2 font-semibold text-sm mb-2" style="color: ${v.bgColor};">
          <span>${v.label}</span>
        </div>
        <div class="text-sm leading-[1.7] text-ink">
          <slot></slot>
        </div>
      </div>
    `
  },
)

export default BlogAlert
