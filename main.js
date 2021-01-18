const { app, BrowserWindow, autoUpdater, dialog } = require('electron')
var os = require('os');

const server = 'https://project-xenomorph.herokuapp.com/'

let url;
if (process.platform === 'win32') {
  url = `${server}/update/win32/${app.getVersion()}/RELEASES`
} else if (process.platform === 'darwin') {
  url = `${server}/update/osx/:currentVersion/${os.platform() + '_' + os.arch()}/${app.getVersion()}/`
}

autoUpdater.setFeedURL({ url })

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
