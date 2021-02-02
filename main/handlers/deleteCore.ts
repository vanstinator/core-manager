import logger from 'electron-log';
import * as fs from 'fs';
import * as path from 'path';

import { MESSAGE_CHANNEL } from '../../core/constants';
import { Core } from '../../core/types';
import { PMS_GAME_CORES_PATH } from '../constants';
import { getCores } from '../services/cores';
import generateMappings from '../xml';

const log = logger.scope('deleteCore');

export default async function deleteCore(event, args: Core[]): Promise<void> {

  const core = args[0];

  log.info(`attempting to get ${core.filename}`);

  let filename: string;

  if (process.platform === 'win32') {
    filename = `${core.filename}.dll`;
  } else if (process.platform === 'darwin') {
    filename = `${core.filename}.dylib`;
  }

  const pathToCore = path.resolve(`${PMS_GAME_CORES_PATH()}/${filename}`);

  const cores = await getCores();
  if (cores.filter(c => c.filename === core.filename && c.isDownloaded).length > 1) {
    log.warn(`only deleting mapping for ${core.filename} - ${core.platforms[0]}. another mapping is using this core lib`);
    await generateMappings(core, { delete: true });
  } else {

    try {

      // Delete the zip
      await fs.promises.unlink(pathToCore);
      log.debug(`deleted file: ${core.filename}`);

      // Re-generate RetroCores.xml mappings
      await generateMappings(core, { delete: true });

    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      log.error(`Something went wrong. ${e.message}`);
    }
  }
}
