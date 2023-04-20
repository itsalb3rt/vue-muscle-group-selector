import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vue-muscle-group-selector',
      fileName: format => `vue-muscle-group-selector.${format}.js`,
    },
    rollupOptions:{
      external: ['vue'],
      output:{
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  
})
