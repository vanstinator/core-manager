import * as fs from 'fs';
import * as path from 'path';
import got from 'got';
import unzipper from 'unzipper';
import logger from 'electron-log';
const log = logger.scope('ipc');
const pipeline = promisify(stream.pipeline);

let pmsPath: string;
if (process.platform === 'win32') {
  pmsPath = path.resolve(`${process.env.HOME}\\AppData\\Local\\Plex Media Server\\Game Cores`);
} else if (process.platform === 'darwin') {
  pmsPath = path.resolve('~/Library/Application Support/Plex Media Server/Game Cores');
}

export async function pmsCheckHandler(): Promise<boolean> {

  try {
    await fs.promises.access(pmsPath, fs.constants.F_OK);
    log.warn(`unable to access ${pmsPath}`);
  } catch (e) {
    log.error(`error accessing ${pmsPath}`, e);
    return false;
  }

  return true;
}

export async function getCore(coreFilename: string): Promise<void> {

  log.info(`attempting to get ${coreFilename}`);

  let filename: string;
  let downloadPath: string;
  if (process.platform === 'win32') {
    filename = `${coreFilename}.dll.zip`;
    downloadPath = `https://buildbot.libretro.com/nightly/windows/x86_64/latest/${filename}`;
  } else if (process.platform === 'darwin') {
    filename = `${coreFilename}.dylib.zip`;
    downloadPath = `https://buildbot.libretro.com/nightly/apple/osx/x86_64/${filename}`;
  }

  const pathToZip = path.resolve(`${pmsPath}/${filename}`);
  const downloadStream = got.stream(downloadPath);
  const fileWriterStream = fs.createWriteStream(pathToZip);

  downloadStream.on("downloadProgress", ({ transferred, total, percent }: { transferred: string, total: string, percent: number}) => {
    const percentage = Math.round(percent * 100);
    log.silly(`progress: ${transferred}/${total} (${percentage}%)`);
  });

  try {

  // Download the zip to disk
    await pipeline(downloadStream, fileWriterStream);
    log.debug(`file downloaded to ${pathToZip}`);

  // Extract the core
  await pipeline(fs.createReadStream(pathToZip), unzipper.Extract({ path: `${pmsPath}` }));
    log.debug('file extracted');

  // Delete the zip
  await fs.promises.unlink(pathToZip);
    log.debug('deleted file');

  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    log.error(`Something went wrong. ${e.message}`);
  }
}
