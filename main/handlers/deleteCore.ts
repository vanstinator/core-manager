import logger from 'electron-log';
import * as fs from 'fs';
import * as path from 'path';

import { PMS_LIBRARY_PATH } from '../constants';

const log = logger.scope('deleteCore');

export default async function deleteCore(coreFilename: string): Promise<void> {

  log.info(`attempting to get ${coreFilename}`);

  let filename: string;

  if (process.platform === 'win32') {
    filename = `${coreFilename}.dll`;
  } else if (process.platform === 'darwin') {
    filename = `${coreFilename}.dylib`;
  }

  const pathToCore = path.resolve(`${PMS_LIBRARY_PATH()}/${filename}`);

  try {

    // Delete the zip
    await fs.promises.unlink(pathToCore);
    log.debug(`deleted file: ${coreFilename}`);

  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    log.error(`Something went wrong. ${e.message}`);
  }
}
