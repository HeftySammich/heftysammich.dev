import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        donate: resolve(__dirname, 'donate.html'),
        'slime-starfall-v': resolve(__dirname, 'slime-starfall-v.html'),
        'slime-hbuds': resolve(__dirname, 'slime-hbuds.html'),
        'slime-wild-tigers': resolve(__dirname, 'slime-wild-tigers.html'),
      },
    },
  },
})

