import logger from 'electron-log';
import * as fs from 'fs';
import { create } from 'xmlbuilder2';

import { Core } from '../core/types';
import { PMS_MAPPINGS_PATH } from './constants';
import { getCores } from './services/cores';

const log = logger.scope('generateMappings');

export default async function generateMappings(core?: Core, opts?: { delete: boolean }): Promise<void> {

  log.info('generating mappings');

  const cores = await getCores();

  try {
    await fs.promises.unlink(PMS_MAPPINGS_PATH);
  } catch (e) {
    // do nothing
  }

  let coresByPlatform = [];
  for (const core of cores.filter(core => core.isDownloaded)) {
    coresByPlatform.push({
      '@platform': core.platforms[0],
      '@core': core.filename
    });
  }

  // stub in the new core we just downloaded
  if (core) {
    if (opts?.delete) {
      log.info(`unmapped ${core.filename} for ${core.platforms[0]}`);
      coresByPlatform = coresByPlatform.filter(c => c['@platform'] !== core.platforms[0] && c.filename !== core.filename);
    } else {
      coresByPlatform.push({
        '@platform': core.platforms[0],
        '@core': core.filename
      });
    }
  }

  const mappings = {
    Mappings: {
      Mapping: coresByPlatform
    }
  };

  const doc = create(mappings);
  const xml = doc.end({ prettyPrint: true });

  log.info('generated mappings');

  await fs.promises.writeFile(PMS_MAPPINGS_PATH, xml);
}
