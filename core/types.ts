export interface Platform {
  name: string,
  cores: PlatformCore[]
}

export interface PlatformCore {
  name: string;
  filename: string;
  needsUpdate?: boolean;
  downloaded?: boolean;
}

export interface PlatformCoreMapping {
  core: string,
  platformName: string
}
