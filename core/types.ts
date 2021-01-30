import { PLATFORMS } from './constants';

export interface Core {
  platforms: PLATFORMS[],
  name: string;
  filename: string;
  needsUpdate?: boolean;
  isDownloaded?: boolean;
  downloadProgress?: number;
  disabled?: boolean;
  arch?: ARCH[];
  infoUrl?: string;
}

export interface XmlMapping {
  Mappings: {
    Mapping: [{
      $: {
        platform: string,
        core: string
      }
    }]
  }
}

export enum ARCH {
  'win32',
  'macOS'
}
