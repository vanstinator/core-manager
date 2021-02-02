import crypto from 'crypto';
import logger from 'electron-log';
import Store from 'electron-store';
import keytar from 'keytar';

const log = logger.scope('settings');

const shasum = crypto.createHash('sha1');

const SERVICE = 'CoreManager';
const ACCOUNT = 'Configuration';

let password = '';
let store;

export async function initialize(): Promise<void> {
  password = await keytar.getPassword(SERVICE, ACCOUNT);
  if (!password) {
    log.info('password missing. setting up fresh credentials. this will reset the config (if we had one)');

    shasum.update(Math.random().toString(36));
    password = shasum.digest('hex');

    await keytar.setPassword(SERVICE, ACCOUNT, password);

    log.info('successfully set new password');
  }

  store = new Store({
    clearInvalidConfig: true,
    encryptionKey: password,
    schema: {
      plexDataPath: {
        type: 'string'
      }
    }
  });
}

export default {
  get: {
    plexDataPath: (): string => { return store.get('plexDataPath'); }
  },
  set: {
    plexDataPath: (path: string): void => { store.set('plexDataPath', path); }
  }
};
