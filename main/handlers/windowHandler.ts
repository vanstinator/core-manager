import { BrowserWindow } from 'electron';

import { MESSAGE_CHANNEL } from '../../core/constants';

export default function windowEvents(event, args: string[]): void {

  const window = BrowserWindow.getFocusedWindow();

  switch (args?.[0]) {
    case 'min':
      window.minimize();
      break;
    case 'max':
      window.maximize();
      break;
    case 'unmax':
      window.unmaximize();
      break;
    case 'close':
      window.close();
      break;
  }

  // TODO this feels like a hack. But I haven't figured out how to represent this in window.api yet. For now it works :shrug:
  window.removeAllListeners();
  window.on('maximize', () => event.reply(MESSAGE_CHANNEL.windowHandler, 'maximize'));
  window.on('unmaximize', () => event.reply(MESSAGE_CHANNEL.windowHandler, 'unmaximize'));

}
