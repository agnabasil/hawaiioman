import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPrerender from 'vite-plugin-seo-prerender'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    seoPrerender({
      routes: [
        '/',
        '/products',
        '/products/ginger-orange',
        '/products/ball-grape',
        '/products/pieces-mango',
        '/products/natural-lemon',
        '/story',
        '/contact',
      ],
      puppeteer: {
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
          || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true,
      },
    }),
  ],
  base: '/',
})

