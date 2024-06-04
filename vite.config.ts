import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  base: '/ultimate-programming-guide/',
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
        webDesignTodoList: resolve(root, 'WebDesign', 'Projects', 'ToDo','index.html'),
        webDesignTicTacToe: resolve(root, 'WebDesign', 'Projects', 'TicTacToe', 'index.html'),
        webDesignTodoListE: resolve(root, 'WebDesign', 'Projects', 'Examples' ,'Todo.html'),
        webDesignTicTacToeE: resolve(root, 'WebDesign', 'Projects', 'Examples' ,'TicTacToe.html'),
        webDesignCookieClicker: resolve(root, 'WebDesign', 'Projects', 'CookieClicker', 'index.html'),
        webDesignCookieClickerE: resolve(root, 'WebDesign', 'Projects', 'Examples', 'CookieClicker.html')

      }
    }
  }
})
