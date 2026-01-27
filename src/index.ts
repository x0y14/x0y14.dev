import { Hono } from "hono"
import { servePages } from "chigusa"
import pages from "virtual:chigusa/pages"

const app = new Hono()

servePages(app, pages, {
  template: (content, _path) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Blog</title>
      </head>
      <body>${content}</body>
    </html>
  `,
})

export default app
