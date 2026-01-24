import { useState } from "preact/hooks"
import type { JSX } from "preact/jsx-runtime"

export function Button(): JSX.Element {
  const [count, setCount] = useState<number>(0)
  return (
    <button
      className={"text-green-900"}
      onClick={() => {
        setCount(count + 1)
      }}
    >
      clickme!: {count}
    </button>
  )
}
