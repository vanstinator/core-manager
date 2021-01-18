import * as fs from 'fs';
import * as util from 'util';
import * as path from 'path';

const access = util.promisify(fs.access);

export async function pmsCheckHandler(): Promise<boolean> {

  let pmsPath;
  if (process.platform === 'win32') {
    pmsPath = path.resolve(`${process.env.HOME}\\AppData\\Local\\Plex Media Server`);
  } else if (process.platform === 'darwin') {
    pmsPath = path.resolve('~/Library/Application Support/Plex Media Server/');
  }

  try {
    await access(pmsPath, fs.constants.F_OK);
  } catch (e) {
    console.log(e);
    return false;
  }

  return true;
}
