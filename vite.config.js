import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        appNotFound: resolve(__dirname, '404.html'),
        appHome: resolve(__dirname, 'index.html'),
        appImprint: resolve(__dirname, 'imprint.html')
      }
    }
  }
})
