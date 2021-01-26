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
  url?: string;
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

export interface PlatformCoreMapping {
  filename: string,
  platforms: PLATFORMS[]
}

export enum ARCH {
  'win32',
  'macOS'
}
