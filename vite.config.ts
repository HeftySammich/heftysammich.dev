import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'dev-log': resolve(__dirname, 'dev-log.html'),
        donate: resolve(__dirname, 'donate.html'),
        'slime-starfall-v': resolve(__dirname, 'slime-starfall-v.html'),
        'slime-hbuds': resolve(__dirname, 'slime-hbuds.html'),
        'slime-wild-tigers': resolve(__dirname, 'slime-wild-tigers.html'),
        nfts: resolve(__dirname, 'nfts.html'),
        'hedera-creator-kit': resolve(__dirname, 'hedera-creator-kit.html'),
      },
    },
  },
})

