import logger from 'electron-log';
import * as fs from 'fs';

import { CORES } from '../core/constants';
import { ARCH, Core } from '../core/types';
import { PMS_GAME_CORES_PATH } from './constants';

const log = logger.scope('utils');

export async function getAllCoresFromDisk(): Promise<Core[]> {
  const files = await fs.promises.readdir(PMS_GAME_CORES_PATH);

  let arch;
  switch (process.platform) {
    case 'win32':
      arch = ARCH.win32;
      break;
    case 'darwin':
      arch = ARCH.macOS;
      break;
  }

  const cores = JSON.parse(JSON.stringify(CORES));
  cores.map(core => core.supportedPlatform = core.arch.includes(arch));

  for (const file of files) {
    const filename = file.split('.').slice(0, -1).join('.');
    const core = cores.find(core => core.filename === filename);

    if (core) {
      core.isDownloaded = true;
    }
  }

  log.silly('found some cores: ', cores.map(core => core.filename).join(', '));
  return cores;
}
