import * as customTitlebar from 'custom-electron-titlebar';
import { contextBridge, ipcRenderer } from 'electron';
import * as path from 'path';
import * as url from 'url';

import { MESSAGE_CHANNEL } from './core/constants';

console.log('preload.js loaded');

const dark = customTitlebar.Color.fromHex('#000');
const light = customTitlebar.Color.fromHex('#fff');

if (process.platform === 'win32') {
  window.addEventListener('DOMContentLoaded', () => {

    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const titlebar = new customTitlebar.Titlebar({
      titleHorizontalAlignment: 'left',
      menu: undefined,
      backgroundColor: userPrefersDark ? dark : light,
      icon: url.format(path.join(__dirname, '../dist/assets/icons/icon.ico'))
    });

    document.getElementsByTagName('body')[0].classList.add('windows');

    // We don't have access to electron.nativeTheme here. We _could_ set up an ipc event listener.
    // But it seems much simpler to just use the default js event watchMedia implementation
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (e.matches) {
        titlebar.updateBackground(dark);
      } else {
        titlebar.updateBackground(light);
      }
    });

    const replaceText = (selector, text) => {
      const element = document.getElementById(selector);
      if (element) element.innerText = text;
    };

    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type]);
    }
  });
}

contextBridge.exposeInMainWorld('api', {
  electronIpcSend: (channel: string, ...arg: any) => {
    if (MESSAGE_CHANNEL[channel]) {
      ipcRenderer.send(channel, arg);
    }
  },
  electronIpcInvoke: (channel: string, ...arg: any) => {
    if (MESSAGE_CHANNEL[channel]) {
      return ipcRenderer.invoke(channel, arg);
    }
  },
  // electronIpcSendSync: (channel: string, ...arg: any) => {
  //   return ipcRenderer.sendSync(channel, arg);
  // },
  electronIpcOn: (channel: string, listener: (event: any, ...arg: any) => void) => {
    if (MESSAGE_CHANNEL[channel]) {
      ipcRenderer.on(channel, listener);
    }
  }
  // electronIpcOnce: (channel: string, listener: (event: any, ...arg: any) => void) => {
  //   ipcRenderer.once(channel, listener);
  // },
  // electronIpcRemoveListener:  (channel: string, listener: (event: any, ...arg: any) => void) => {
  //   ipcRenderer.removeListener(channel, listener);
  // },
  // electronIpcRemoveAllListeners: (channel: string) => {
  //   ipcRenderer.removeAllListeners(channel);
  // }
});
