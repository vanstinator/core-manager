import logger from 'electron-log';
import * as fs from 'fs';
import got from 'got';
import * as path from 'path';
import stream from 'stream';
import unzipper from 'unzipper';
import { promisify } from 'util';

import { MESSAGE_CHANNEL } from '../../core/constants';
import { LIBRETRO_PATH_MACOS, LIBRETRO_PATH_WIN32, PMS_GAME_CORES_PATH, PMS_LIBRARY_PATH } from '../constants';
import { getAllCoresFromDisk } from '../utils';
import generateMappings from '../xml';

const pipeline = promisify(stream.pipeline);

const log = logger.scope('downloadCore');

export default async function downloadCore(event, args: string[]): Promise<void> {

  const coreFilename = args?.[0];

  log.info(`attempting to get ${coreFilename}`);

  let filename: string;
  let downloadPath: string;

  if (!fs.existsSync(PMS_GAME_CORES_PATH)) {
    await fs.promises.mkdir(PMS_GAME_CORES_PATH);
  }

  if (process.platform === 'win32') {
    filename = `${coreFilename}.dll.zip`;
    downloadPath = `${LIBRETRO_PATH_WIN32}${filename}`;
  } else if (process.platform === 'darwin') {
    filename = `${coreFilename}.dylib.zip`;
    downloadPath = `${LIBRETRO_PATH_MACOS}${filename}`;
  }

  const pathToZip = path.resolve(`${PMS_GAME_CORES_PATH}/${filename}`);
  const downloadStream = got.stream(downloadPath);
  const fileWriterStream = fs.createWriteStream(pathToZip);

  let lastReportedPercent;
  downloadStream.on('downloadProgress', ({ transferred, total, percent }: { transferred: string, total: string, percent: number}) => {
    const percentage = Math.round(percent * 100);
    if (lastReportedPercent !== percentage) {
      log.silly(`progress: ${transferred}/${total} (${percentage}%)`);
      event.reply(MESSAGE_CHANNEL.downloadProgress, { name: coreFilename, progress: percentage });
      lastReportedPercent = percentage;
    }
  });

  try {

    // Download the zip to disk
    await pipeline(downloadStream, fileWriterStream);
    log.debug(`file downloaded to ${pathToZip}`);

    // Extract the core
    await pipeline(fs.createReadStream(pathToZip), unzipper.Extract({ path: `${PMS_GAME_CORES_PATH}` }));
    log.debug('file extracted');

    // Delete the zip
    await fs.promises.unlink(pathToZip);
    log.debug('deleted file');

    // Re-generate RetroCores.xml mappings
    await generateMappings();

    const cores = await getAllCoresFromDisk();

    event.reply(MESSAGE_CHANNEL.coreResponse, cores);

  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    log.error(`Something went wrong. ${e.message}`);
  }
}
