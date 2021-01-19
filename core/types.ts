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
