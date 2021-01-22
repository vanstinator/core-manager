import logger from 'electron-log';
import * as fs from 'fs';

import { CORE_TO_PLATFORM_MAPPING } from '../core/constants';
import { PlatformCoreMapping } from '../core/types';
import { PMS_GAME_CORES_PATH } from './constants';

const log = logger.scope('utils');

export async function getAllCoresFromDisk(): Promise<PlatformCoreMapping[]> {
  const files = await fs.promises.readdir(PMS_GAME_CORES_PATH);
  const matchedCores = files
    .map(file => file.split('.').slice(0, -1).join('.'))
    .filter(file => !!CORE_TO_PLATFORM_MAPPING[file])
    .map(file => {
      return {
        core: file,
        platformName: CORE_TO_PLATFORM_MAPPING[file]
      };
    });

  log.silly('found some cores\n', matchedCores);
  return matchedCores;
}
