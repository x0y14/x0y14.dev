import { defineElement, useState, useHost, useEffect, css } from "@sparkio/core"

const BlogToc = defineElement(
  {
    tag: "blog-toc",
    props: {
      headings: { type: Array, value: () => [] },
    },
    styles: css`@unocss-placeholder
:host { @apply block; }`,
  },
  (props) => {
    const [activeId, setActiveId] = useState("")
    const host = useHost()

    useEffect(() => {
      const headings = (props.headings as { depth: number; slug: string; text: string }[]) || []
      if (headings.length === 0) return

      const observer = new IntersectionObserver(
        (entries) => {
          // 画面内に入った最初の見出しをアクティブにする
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
              break
            }
          }
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
      )

      for (const h of headings) {
        const el = document.getElementById(h.slug)
        if (el) observer.observe(el)
      }

      return () => observer.disconnect()
    }, [props.headings])

    // クリックイベント: smooth scroll
    useEffect(() => {
      const root = host.current.shadowRoot!
      const handler = (e: Event) => {
        const link = (e.target as HTMLElement).closest("a[data-slug]")
        if (!link) return
        e.preventDefault()
        const slug = link.getAttribute("data-slug")
        if (!slug) return
        const target = document.getElementById(slug)
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
      root.addEventListener("click", handler)
      return () => root.removeEventListener("click", handler)
    }, [])

    const headings = (props.headings as { depth: number; slug: string; text: string }[]) || []
    if (headings.length === 0) return ""

    const items = headings
      .map((h) => {
        const isActive = h.slug === activeId
        const indent = h.depth === 3 ? "pl-3" : ""
        const color = isActive ? "text-accent font-500" : "text-ink-faint hover:text-ink-muted"
        return `<li>
          <a href="#${h.slug}" data-slug="${h.slug}" class="block py-1 text-xs leading-relaxed no-underline transition-colors ${indent} ${color}">${h.text}</a>
        </li>`
      })
      .join("")

    return `
      <nav>
        <p class="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-3">Contents</p>
        <ul class="list-none p-0 m-0 border-l border-border pl-3">${items}</ul>
      </nav>
    `
  },
)

export default BlogToc
