import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Third-party code changes far less often than our lessons and data, so it lives in
// its own chunks: after a content redeploy, returning visitors keep these cached.
const vendorGroups = [
  { name: 'react-vendor', test: /[\/]node_modules[\/](react|react-dom|react-router|react-router-dom|scheduler|cookie|set-cookie-parser)[\/]/, priority: 30 },
  { name: 'icons', test: /[\/]node_modules[\/]lucide-react[\/]/, priority: 20 },
  { name: 'katex', test: /[\/]node_modules[\/]katex[\/]/, priority: 20 },
]

// https://vite.dev/config/
export default defineConfig({
  base: '/Sixth/',
  plugins: [react(), tailwindcss()],
  build: {
    // Lesson banks and exam notes are deliberately large, lazily loaded data chunks.
    chunkSizeWarningLimit: 1000,
    rolldownOptions: {
      output: {
        codeSplitting: { groups: vendorGroups },
      },
    },
  },
})
