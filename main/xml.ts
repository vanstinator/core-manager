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

  const mappings = {
    Mappings: {
      Mapping: cores.map(mapping => {
        return {
          '@platform': mapping.platformName,
          '@core': mapping.core
        };
      })
    }
  };

  console.log(JSON.stringify(mappings, null, 2));

  const doc = create(mappings);
  const xml = doc.end({ prettyPrint: true });

  console.log(xml);

  await fs.promises.writeFile(PMS_MAPPINGS_PATH, xml);
}
