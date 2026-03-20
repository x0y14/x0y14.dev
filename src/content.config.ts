import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

const articles = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = { articles }
