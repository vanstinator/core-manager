import { app } from 'electron';
import * as path from 'path';

import settings from './settings';

const LIBRETRO_NIGHTLIES = 'https://buildbot.libretro.com/nightly';
export const LIBRETRO_PATH_MACOS = `${LIBRETRO_NIGHTLIES}/apple/osx/x86_64/latest/`;
export const LIBRETRO_PATH_WIN32 = `${LIBRETRO_NIGHTLIES}/windows/x86_64/latest/`;

export function PMS_LIBRARY_PATH(): string {
  const pathOverride = settings.get('pmsDataPath') as string | undefined;
  if (pathOverride) {
    return pathOverride;
  }

  if (process.platform === 'win32') {
    return path.resolve(`${app.getPath('home')}\\AppData\\Local\\Plex Media Server`);
  } else if (process.platform === 'darwin') {
    return path.resolve(`${app.getPath('home')}/Library/Application Support/Plex Media Server`);
  }
}

export const PMS_GAME_CORES_PATH = path.resolve(`${PMS_LIBRARY_PATH()}/Game Cores`);
export const PMS_MAPPINGS_PATH = path.resolve(`${PMS_LIBRARY_PATH()}/Plug-in Support/RetroCores.xml`);
