import logger from 'electron-log';
import * as fs from 'fs';

import { CORES } from '../core/constants';
import { Core } from '../core/types';
import { PMS_GAME_CORES_PATH } from './constants';

const log = logger.scope('utils');

export async function getAllCoresFromDisk(): Promise<Core[]> {
  const files = await fs.promises.readdir(PMS_GAME_CORES_PATH);
  const matchedCores = files
    .map(file => file.split('.').slice(0, -1).join('.'))
    .filter(file => !!CORES.find(c => c.filename === file))
    .map(file => {
      return CORES.find(c => c.filename === file);
    });

  log.silly('found some cores: ', matchedCores.map(core => core.filename).join(', '));
  return matchedCores;
}
