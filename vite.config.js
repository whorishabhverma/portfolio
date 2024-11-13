import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // sets the output directory to "build"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});






