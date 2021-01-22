import logger from 'electron-log';
import * as fs from 'fs';
import * as path from 'path';

import { PMS_GAME_CORES_PATH } from '../constants';
import generateMappings from '../xml';

const log = logger.scope('deleteCore');

export default async function deleteCore(coreFilename: string): Promise<void> {

  log.info(`attempting to get ${coreFilename}`);

  let filename: string;

  if (process.platform === 'win32') {
    filename = `${coreFilename}.dll`;
  } else if (process.platform === 'darwin') {
    filename = `${coreFilename}.dylib`;
  }

  const pathToCore = path.resolve(`${PMS_GAME_CORES_PATH}/${filename}`);

  try {

    // Delete the zip
    await fs.promises.unlink(pathToCore);
    log.debug(`deleted file: ${coreFilename}`);

    // Re-generate RetroCores.xml mappings
    await generateMappings();

  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    log.error(`Something went wrong. ${e.message}`);
  }
}
