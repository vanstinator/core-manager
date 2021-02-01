import logger from 'electron-log';
import * as fs from 'fs';
import xml2js from 'xml2js';

import { CORES } from '../../core/constants';
import { ARCH, Core, XmlMapping } from '../../core/types';
import { PMS_GAME_CORES_PATH, PMS_MAPPINGS_PATH } from '../constants';

const log = logger.scope('cores');

function getArch(): ARCH {
  switch (process.platform) {
    case 'win32':
      return ARCH.win32;
    case 'darwin':
      return ARCH.macOS;
  }
}

async function loadXMLMappings(): Promise<XmlMapping | undefined> {
  const parser = new xml2js.Parser();

  try {
    const xml = await fs.promises.readFile(PMS_MAPPINGS_PATH());
    return parser.parseStringPromise(xml);
  } catch (e) {
    log.warn('no mappings file available yet', e);
  }
}

async function loadCores(): Promise<Core[]> {

  const xmlMapping = await loadXMLMappings();
  const files = await fs.promises.readdir(PMS_GAME_CORES_PATH());

  const cores = JSON.parse(JSON.stringify(CORES)).map(core => {

    const matchedFile = files.filter(f => /core.filename/.exec(f));
    const downloadedPlatform = xmlMapping?.Mappings?.Mapping?.find(mapping => mapping.$.core === core.filename && mapping.$.platform === core.platforms[0]);

    return {
      ...core,
      isDownloaded: matchedFile && downloadedPlatform,
      supportedPlatform: core.arch.includes(getArch())
    };
  });

  log.silly('found some cores: ', cores.filter(core => core.isDownloaded).map(core => core.filename).join(', '));
  return cores;
}

export function getCores(): Promise<Core[]> {
  return loadCores();
}
