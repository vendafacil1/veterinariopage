import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Aqui você adiciona a configuração do Babel DENTRO do plugin do React
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
        ],
      },
    }),
  ],
  // Você mantém a sua configuração original aqui
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});