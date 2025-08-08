import { defineConfig } from 'vite';
import { dirname, resolve } from 'path'; //Import this
import { fileURLToPath } from 'url'; //Import this
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url); //Add this
const __dirname = dirname(__filename); //Add this

// https://vite.dev/config/
export default defineConfig({
  //Add below resolve object
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
});
