import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sportsee/',
  build: {
    outDir: 'dist', // Assurez-vous que le répertoire de sortie est correct
  },
  server: {
    port: 3001, // spécifier le port
  }
});