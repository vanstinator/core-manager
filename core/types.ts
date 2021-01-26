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
export interface PlatformCore {
  name: string;
  filename: string;
  needsUpdate?: boolean;
  isDownloaded?: boolean;
  downloadProgress?: number;
  disabled?: boolean;
  arch?: ARCH[];
  url?: string;
}

export enum ARCH {
  'win32',
  'macOS'
}
