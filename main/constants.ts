import { app } from 'electron';
import * as path from 'path';

const LIBRETRO_NIGHTLIES = 'https://buildbot.libretro.com/nightly/';
export const LIBRETRO_PATH_MACOS = `${LIBRETRO_NIGHTLIES}/apple/osx/x86_64/`;
export const LIBRETRO_PATH_WIN32 = `${LIBRETRO_NIGHTLIES}/windows/x86_64/latest/`;

export function PMS_LIBRARY_PATH(): string {
  if (process.platform === 'win32') {
    return path.resolve(`${app.getPath('home')}\\AppData\\Local\\Plex Media Server\\Game Cores`);
  } else if (process.platform === 'darwin') {
    return path.resolve('~/Library/Application Support/Plex Media Server/Game Cores');
  }
}
