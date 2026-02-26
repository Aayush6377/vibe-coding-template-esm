import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Force Vite to download heavy packages from the internet instead of RAM
      'framer-motion': 'https://esm.sh/framer-motion@10.16.4?external=react,react-dom',
      'lucide-react': 'https://esm.sh/lucide-react?external=react,react-dom'
    }
  }
})