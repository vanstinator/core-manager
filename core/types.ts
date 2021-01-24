export interface Platform {
  name: string,
  cores: PlatformCore[],
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
  core: string,
  platformName: string
}

export enum ARCH {
  'win32',
  'macOS'
}
