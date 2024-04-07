// NodeJS
import url from 'node:url'

// Electron
import { app, BrowserWindow } from 'electron'

let win: BrowserWindow | null

interface Props {
  title: string
  center: boolean
  width: number
  height: number
}

function createWindow({ title, center, width, height }: Props) {
  win = new BrowserWindow({
    title,
    webPreferences: {
      preload: url.fileURLToPath(new URL('preload.mjs', import.meta.url))
    },
    center,
    width,
    height
  })

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // Load your file
    win.loadFile('dist/index.html')
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow({
      title: 'NoMoreBackground',
      center: true,
      width: 784,
      height: 591
    })
  }
})

app
  .whenReady()
  .then(() =>
    createWindow({
      title: 'NoMoreBackground',
      center: true,
      width: 784,
      height: 591
    })
  )
