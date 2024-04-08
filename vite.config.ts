// Vite
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import electron from "vite-plugin-electron/simple"

// NodeJS
import path from "node:path"
import url from "node:url"

// Plugins
import tsConfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		electron({
			main: {
				// Shortcut of `build.lib.entry`.
				entry: "electron/main.ts"
			},
			preload: {
				// Shortcut of `build.rollupOptions.input`.
				// Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
				input: path.join(
					path.dirname(url.fileURLToPath(import.meta.url)),
					"electron/preload.ts"
				)
			},
			// Ployfill the Electron and Node.js API for Renderer process.
			// If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
			// See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
			renderer: {}
		}),
		tsConfigPaths()
	]
})
