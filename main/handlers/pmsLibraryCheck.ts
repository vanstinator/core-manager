import logger from 'electron-log';
import * as fs from 'fs';
import * as path from 'path';

import { PMS_LIBRARY_PATH } from '../constants';

const log = logger.scope('pmsLibraryCheck');

export default async function pmsLibraryCheck(): Promise<boolean> {

  try {
    // Search for a known directory so that users don't just add a custom random directory that isn't PMS
    await fs.promises.access(path.resolve(`${PMS_LIBRARY_PATH()}/Plug-in Support`), fs.constants.F_OK);
    log.info(`found PMS path: ${PMS_LIBRARY_PATH()}`);
  } catch (e) {
    log.error(`error accessing ${PMS_LIBRARY_PATH()}`, e);
    return false;
  }

  return true;
}
