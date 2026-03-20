import { defineElement, useState, useHost, useEffect, useSlot, css } from "@sparkio/core"

const BlogCopyCode = defineElement(
  {
    tag: "blog-copy-code",
    styles: css`@unocss-placeholder
:host { @apply block relative my-8; }
::slotted(pre) {
  margin: 0 !important;
  border-radius: 0.375rem;
  padding: 1.25rem !important;
  font-size: 0.875rem;
  line-height: 1.7;
  overflow-x: auto;
}`,
  },
  () => {
    const [copied, setCopied] = useState(false)
    const host = useHost()
    const slotted = useSlot()

    useEffect(() => {
      const root = host.current.shadowRoot!
      const handler = async (e: Event) => {
        const btn = (e.target as HTMLElement).closest("[data-action='copy']")
        if (!btn) return
        // slotted <pre> からテキストを取得
        const pre = slotted[0] as HTMLPreElement | undefined
        if (!pre) return
        const code = pre.querySelector("code")
        const text = (code || pre).textContent || ""
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch {
          // clipboard API が使えない場合は無視
        }
      }
      root.addEventListener("click", handler)
      return () => root.removeEventListener("click", handler)
    }, [slotted])

    const label = copied ? "Copied!" : "Copy"
    const btnColor = copied ? "text-accent" : "text-ink-faint hover:text-ink-muted"

    return `
      <div class="relative group">
        <slot></slot>
        <button data-action="copy" class="absolute top-2 right-2 font-mono text-[10px] tracking-wide uppercase px-2 py-1 bg-transparent border border-border-dark rounded cursor-pointer transition-colors ${btnColor}">${label}</button>
      </div>
    `
  },
)

export default BlogCopyCode
