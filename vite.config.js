import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  publicDir: 'public',
  outDir: '../docs',
  server: {
    open: true
  },
  plugins: [react()],
})
