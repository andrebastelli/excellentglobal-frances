import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    allowedHosts: ['sb-d3f5cfunhk2l.vercel.run', 'sb-yms5o05v05az.vercel.run'],
  },
})
