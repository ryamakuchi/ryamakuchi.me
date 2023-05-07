import { getViteConfig } from 'astro/config'
import solidPlugin from 'vite-plugin-solid'

export default getViteConfig({
  plugins: [solidPlugin()],
  test: {},
})
