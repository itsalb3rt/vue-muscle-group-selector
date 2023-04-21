import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/MuscleGroupSelector.vue'),
      name: 'vue-muscle-group-selector',
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
