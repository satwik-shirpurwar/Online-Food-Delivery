import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // All requests from your app starting with /api will be sent to your backend
      '/api': {
        target: 'http://localhost:4000', // Your backend server URL
        changeOrigin: true,
      }
    }
  },
})