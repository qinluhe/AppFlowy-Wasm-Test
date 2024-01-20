import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig(({ mode: _ }) => {
  const defaultConfig = {
    plugins: [react(), wasm()],
    server: {
      port: 4001,
      watch: {
        ignored: ['**/__tests__/**'],
      },
    },
    resolve: {
      alias: [
        { find: '@wasm-lib/', replacement: `${__dirname}/flowy-wasm/pkg/` },
      ],
    },
  };

  return defaultConfig
})
