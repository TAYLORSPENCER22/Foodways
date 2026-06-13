import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: 'client',
  envDir: '../',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
