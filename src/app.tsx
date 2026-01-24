import type { JSX } from "preact/jsx-runtime"
import type { ComponentType } from "preact"

// ページを全部読み込む
const mdxModules = import.meta.glob<{ default: ComponentType }>("./pages/**/*.mdx", {
  eager: true,
})

// パスからコンポーネントを取得
function getPage(pathname: string): ComponentType {
  if (pathname === "" || pathname === "/") {
    return mdxModules["./pages/index.mdx"].default
  }

  const pagePath = `./pages${pathname}.mdx`
  if (pagePath in mdxModules) {
    return mdxModules[pagePath].default
  }

  return mdxModules["./pages/404.mdx"].default
}

export function App(): JSX.Element {
  const MdxComponent = getPage(window.location.pathname)
  return <MdxComponent />
}
