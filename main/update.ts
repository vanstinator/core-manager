import { app, autoUpdater, dialog } from 'electron';
import logger from 'electron-log';
import os from 'os';

const log = logger.scope('updater');

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

export default function registerUpdater() {
  try {
    const server = 'https://project-xenomorph.herokuapp.com';

    let updateUrl;
    if (process.platform === 'win32') {
      updateUrl = `${server}/update/win32/${app.getVersion()}`;
    } else if (process.platform === 'darwin') {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      updateUrl = `${server}/update/osx/:currentVersion/${os.platform()}_${os.arch()}/${app.getVersion()}/`;
    }

    autoUpdater.setFeedURL({ url: updateUrl });
    autoUpdater.checkForUpdates();

    setInterval(() => {
      autoUpdater.checkForUpdates();
    }, 60000);
  } catch (e) {
    log.error('there was a problem registering the updater. bailing out.', e);
  }
}
