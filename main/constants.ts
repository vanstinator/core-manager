import { app } from 'electron';
import logger from 'electron-log';
import * as path from 'path';

import settings from './settings';

const log = logger.scope('constants');

const LIBRETRO_NIGHTLIES = 'https://buildbot.libretro.com/nightly';
export const LIBRETRO_PATH_MACOS = `${LIBRETRO_NIGHTLIES}/apple/osx/x86_64/latest/`;
export const LIBRETRO_PATH_WIN32 = `${LIBRETRO_NIGHTLIES}/windows/x86_64/latest/`;

export function PMS_LIBRARY_PATH(): string {
  const pathOverride = settings.get.plexDataPath();
  if (pathOverride) {
    log.info(`using custom path: ${pathOverride}`);
    return pathOverride;
  }

  if (process.platform === 'win32') {
    return path.resolve(`${app.getPath('home')}\\AppData\\Local\\Plex Media Server`);
  } else if (process.platform === 'darwin') {
    return path.resolve(`${app.getPath('home')}/Library/Application Support/Plex Media Server`);
  }
}

export function PMS_GAME_CORES_PATH(): string { return path.resolve(`${PMS_LIBRARY_PATH()}/Game Cores`); }
export function PMS_MAPPINGS_PATH(): string { return path.resolve(`${PMS_LIBRARY_PATH()}/Plug-in Support/RetroCores.xml`); }
