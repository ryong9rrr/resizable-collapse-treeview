const { app, BrowserWindow, ipcMain } = require("electron")
const MESSAGES = require("./constants.js")
//const path = require("path")

let mainWindow = null
const DEV_URL = "http://localhost:3000"

function createWindow() {
  mainWindow = new BrowserWindow({
    frame: false,
    width: 960,
    height: 630,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  mainWindow.loadURL(DEV_URL)
  mainWindow.focus()
}

/********************* TitleBar ************************/
ipcMain.on(MESSAGES.TITLE_BAR_MINIMIZE, (event, arg) => {
  if (mainWindow) {
    mainWindow.minimize()
  }
})

ipcMain.on(MESSAGES.TITLE_BAR_MAXIMIZE, (event, arg) => {
  if (mainWindow) {
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
  }
})

ipcMain.on(MESSAGES.TITLE_BAR_CLOSE, (event, arg) => {
  if (mainWindow) {
    mainWindow.close()
  }
})
/*******************************************************/

app.whenReady().then(() => {
  createWindow()
})

app.on("window-all-closed", () => {
  app.quit()
})
