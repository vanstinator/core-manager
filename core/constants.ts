import { Platform } from './types';

export const MESSAGE_CHANNEL = {
  deleteCore: 'deleteCore',
  downloadCore: 'downloadCore',
  pmsLibraryCheck: 'pmsLibraryCheck'
};

export const PLATFORMS: Platform[] = [
  {
    name: 'Nintendo Entertainment System',
    cores: [
      {
        name: 'FCEUmm',
        filename: 'fceumm_libretro',
        needsUpdate: false,
        downloaded: false
      },
      {
        name: 'bnes',
        filename: 'fbneo_libretro',
        needsUpdate: false,
        downloaded: false
      }
    ]
  }
];
