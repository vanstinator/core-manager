import * as fs from 'fs';
import { create } from 'xmlbuilder2';

import { PMS_MAPPINGS_PATH } from './constants';
import { getAllCoresFromDisk } from './utils';

export default async function generateMappings(): Promise<void> {
  const cores = await getAllCoresFromDisk();

  try {
    await fs.promises.unlink(PMS_MAPPINGS_PATH);
  } catch (e) {
    // do nothing
  }

  const coresByPlatform = [];
  for (const core of cores.filter(core => core.isDownloaded)) {
    for (const platform of core.platforms) {
      coresByPlatform.push({
        '@platform': platform,
        '@core': core.filename
      });
    }
  }

  const mappings = {
    Mappings: {
      Mapping: coresByPlatform
    }
  };

  console.log(JSON.stringify(mappings, null, 2));

  const doc = create(mappings);
  const xml = doc.end({ prettyPrint: true });

  console.log(xml);

  await fs.promises.writeFile(PMS_MAPPINGS_PATH, xml);
}
