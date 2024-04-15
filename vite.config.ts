import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  base: '/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root,  'index.html'),
        webDesign: resolve(root, 'WebDesign', 'index.html'),
        webDesignTutorials: resolve(root, 'WebDesign', 'Tutorials', 'index.html'),
        webDesignResources: resolve(root, 'WebDesign', 'resources.html'),
        webDesignProjects: resolve(root, 'WebDesign', 'Projects', 'index.html'),

      }
    }
  }
})
