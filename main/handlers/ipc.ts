import * as fs from 'fs';
import * as path from 'path';
import got from 'got';
import unzipper from 'unzipper';
const stream = require("stream");
const { promisify } = require("util");
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
  } catch (e) {
    console.log(e);
    return false;
  }

  return true;
}

export async function getCore(coreFilename: string): Promise<void> {

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
    console.error(`progress: ${transferred}/${total} (${percentage}%)`);
  });

  // Download the zip to disk
  await pipeline(downloadStream, fileWriterStream)
    .then(() => console.log(`File downloaded to ${pathToZip}`))
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    .catch((error) => console.error(`Something went wrong. ${error.message}`));

  // Extract the core
  await pipeline(fs.createReadStream(pathToZip), unzipper.Extract({ path: `${pmsPath}` }));

  // Delete the zip
  await fs.promises.unlink(pathToZip);

}
