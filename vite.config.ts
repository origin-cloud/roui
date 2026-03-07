import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'RElement',
      fileName: 'r-element',
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          '@fortawesome/fontawesome-svg-core': 'FontAwesome',
          '@fortawesome/free-solid-svg-icons': 'FontAwesomeSolid',
          '@fortawesome/vue-fontawesome': 'FontAwesomeVue',
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.scss') {
            return 'index.scss'
          }
          return chunkInfo.name as string
        },
      },
    },
  },
})
