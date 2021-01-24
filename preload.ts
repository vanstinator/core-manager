import {
  contextBridge,
  ipcRenderer,
} from 'electron';

import { MESSAGE_CHANNEL } from './core/constants';

console.log('preload.js loaded');

contextBridge.exposeInMainWorld(
  'api', {
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
    },
    // electronIpcOnce: (channel: string, listener: (event: any, ...arg: any) => void) => {
    //   ipcRenderer.once(channel, listener);
    // },
    // electronIpcRemoveListener:  (channel: string, listener: (event: any, ...arg: any) => void) => {
    //   ipcRenderer.removeListener(channel, listener);
    // },
    // electronIpcRemoveAllListeners: (channel: string) => {
    //   ipcRenderer.removeAllListeners(channel);
    // }
  }
);
