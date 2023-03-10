const { app, BrowserWindow } = require("electron")
// const path = require("path")

const DEV_URL = "http://localhost:3000"

function createWindow() {
  const win = new BrowserWindow({
    width: 960,
    height: 630,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  win.loadURL(DEV_URL)
}

app.whenReady().then(() => {
  createWindow()
})

app.on("window-all-closed", () => {
  app.quit()
})
