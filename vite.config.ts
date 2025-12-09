import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path so assets work on GitHub Pages under /ComputacionalVirologyHomePage
  base: '/ComputacionalVirologyHomePage/',
})
