import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview:{
    host: true,
    port: 5173
  },
  server: {
    host: 'localhost',
    port:3001
  }
  
})
