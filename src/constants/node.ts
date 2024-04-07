import path from "node:path"
import url from "node:url"

export const dirname = path.dirname(url.fileURLToPath(import.meta.url))
