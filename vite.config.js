import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],  // Ensures React support in Vite
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-dom/client']
  }
});
