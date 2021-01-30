import logger from 'electron-log';
import * as fs from 'fs';

import { PMS_LIBRARY_PATH } from '../constants';

const log = logger.scope('pmsLibraryCheck');

export default async function pmsLibraryCheck(): Promise<boolean> {

  try {
    await fs.promises.access(PMS_LIBRARY_PATH(), fs.constants.F_OK);
    log.info(`found PMS path: ${PMS_LIBRARY_PATH()}`);
  } catch (e) {
    log.error(`error accessing ${PMS_LIBRARY_PATH()}`, e);
    return false;
  }

  return true;
}
