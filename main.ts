import { app, autoUpdater, BrowserWindow, dialog, ipcMain, screen } from 'electron';
import logger from 'electron-log';
import squirrelStartup from 'electron-squirrel-startup';
import os from 'os';
import * as path from 'path';
import * as url from 'url';

import { MESSAGE_CHANNEL } from './core/constants';
import { getCore, pmsCheckHandler } from './main/handlers/ipc';

if (squirrelStartup) {
  app.quit();
}

// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  // @ts-expect-error this is fine
  return;
}

function handleSquirrelEvent() {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, { detached: true });
    } catch (error) {
      logger.error(error);
    }

    return spawnedProcess;
  };

  const spawnUpdate = function(args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName]);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName]);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated

      app.quit();
      return true;
  }
}

const server = 'https://project-xenomorph.herokuapp.com';

let updateUrl;
if (process.platform === 'win32') {
  updateUrl = `${server}/update/win32/${app.getVersion()}`;
} else if (process.platform === 'darwin') {
  updateUrl = `${server}/update/osx/:currentVersion/${os.platform() + '_' + os.arch()}/${app.getVersion()}/`;
}

autoUpdater.setFeedURL({ url: updateUrl });
autoUpdater.checkForUpdates();
setInterval(() => {
  autoUpdater.checkForUpdates();
}, 60000);

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.'
  };

  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) autoUpdater.quitAndInstall();
  });
});

logger.transports.file.level = 'silly';

let win: BrowserWindow = null;
const args = process.argv.slice(1),
  serve = args.some(val => val === '--serve');

ipcMain.handle(MESSAGE_CHANNEL.getCore, (event, args: string[]) => getCore(args?.[0]));
ipcMain.handle(MESSAGE_CHANNEL.pmsCheck, pmsCheckHandler);

function createWindow(): BrowserWindow {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      allowRunningInsecureContent: (serve) ? true : false,
      contextIsolation: true,  // false if you want to run 2e2 test with Spectron
      enableRemoteModule : true, // true if you want to run 2e2 test  with Spectron or use remote module in renderer context (ie. Angular),
      preload: path.join(__dirname, 'preload.js')
    },
  });

  if (serve) {

    win.webContents.openDevTools();

    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:6001');

  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  return win;
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => setTimeout(createWindow, 400));

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
