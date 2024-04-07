import tailwind from '@astrojs/tailwind'
import electron from 'astro-electron'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    electron({
      main: {
        // Path to your Electron main file
        entry: 'src/electron/main.ts'
      },
      preload: {
        // Path to your Electron preload file
        input: 'src/electron/preload.ts'
      },
      // Renderer-specific configurations (if needed)
      renderer: {}
    })
  ]
})
