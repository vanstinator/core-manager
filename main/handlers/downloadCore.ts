import logger from 'electron-log';
import * as fs from 'fs';
import got from 'got';
import * as path from 'path';
import stream from 'stream';
import unzipper from 'unzipper';
import { promisify } from 'util';

import { MESSAGE_CHANNEL } from '../../core/constants';
import { Core } from '../../core/types';
import { LIBRETRO_PATH_MACOS, LIBRETRO_PATH_WIN32, PMS_GAME_CORES_PATH } from '../constants';
import { getCores } from '../services/cores';
import generateMappings from '../xml';

const pipeline = promisify(stream.pipeline);

const log = logger.scope('downloadCore');

export default async function downloadCore(event, args: Core[]): Promise<void> {

  const core = args[0];

  log.info(`attempting to get ${core.filename}`);

  let filename: string;
  let downloadPath: string;

  if (process.platform === 'win32') {
    filename = `${core.filename}.dll.zip`;
    downloadPath = `${LIBRETRO_PATH_WIN32}${filename}`;
  } else if (process.platform === 'darwin') {
    filename = `${core.filename}.dylib.zip`;
    downloadPath = `${LIBRETRO_PATH_MACOS}${filename}`;
  }

  const pathToZip = path.resolve(`${PMS_GAME_CORES_PATH()}/${filename}`);
  const downloadStream = got.stream(downloadPath);
  const fileWriterStream = fs.createWriteStream(pathToZip);

  let lastReportedPercent;
  downloadStream.on('downloadProgress', ({ transferred, total, percent }: { transferred: string, total: string, percent: number }) => {
    const percentage = Math.round(percent * 100);
    if (lastReportedPercent !== percentage) {
      log.silly(`progress: ${transferred}/${total} (${percentage}%)`);
      event.reply(MESSAGE_CHANNEL.downloadProgress, { filename: core.filename, platform: core.platforms[0], progress: percentage });
      lastReportedPercent = percentage;
    }
  });

  try {

    // Download the zip to disk
    await pipeline(downloadStream, fileWriterStream);
    log.debug(`file downloaded to ${pathToZip}`);

    // Extract the core
    await pipeline(fs.createReadStream(pathToZip), unzipper.Extract({ path: `${PMS_GAME_CORES_PATH()}` }));
    log.debug('file extracted');

    // Delete the zip
    await fs.promises.unlink(pathToZip);
    log.debug('deleted file');

    // Re-generate RetroCores.xml mappings
    await generateMappings(core);

    const cores = await getCores();

    event.reply(MESSAGE_CHANNEL.coreResponse, cores);

  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    log.error(`Something went wrong. ${e.message}`);
  }
}
