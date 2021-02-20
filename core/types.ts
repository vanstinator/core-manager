import { PLATFORMS } from './constants';

export interface Core {
  arch?: ARCH[];
  disabled?: boolean;
  downloadProgress?: number;
  filename: string;
  hidden?: boolean;
  infoUrl?: string;
  isDownloaded?: boolean;
  name: string;
  needsUpdate?: boolean;
  platform?: PLATFORMS;
  platforms: PLATFORMS[];
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
