import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  plugins: [preact()],
  build: {
    outDir: '../dist'
  }
})
