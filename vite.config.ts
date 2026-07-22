import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPrerender from 'vite-plugin-seo-prerender'
import { JUICE_PRODUCTS } from './src/data/mockData'

// Derive prerender routes from data so every live product page ships as
// static HTML — non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot)
// and the host get real content, never an empty SPA shell.
// Coming-soon items have no detail page, so they are excluded.
const productRoutes = JUICE_PRODUCTS
  .filter((p) => !p.isComingSoon)
  .map((p) => `/products/${p.id}`)

// '/' MUST come last: the prerender plugin writes the home render into
// dist/index.html, which then becomes the served base for any route processed
// afterwards — polluting their <head> with home's tags (duplicate title/og).
// Processing '/' last keeps every sub-route rendering against the clean base.
const routes = [
  '/products',
  ...productRoutes,
  '/story',
  '/contact',
  '/',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    seoPrerender({
      routes,
      puppeteer: {
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
          || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true,
      },
    }),
  ],
  base: '/',
})
