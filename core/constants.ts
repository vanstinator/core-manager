import { Platform } from './types';

export const MESSAGE_CHANNEL = {
  coreCheck: 'coreCheck',
  deleteCore: 'deleteCore',
  downloadCore: 'downloadCore',
  pmsLibraryCheck: 'pmsLibraryCheck'
};

export const PLATFORMS: Platform[] = [
  {
    name: 'Atari 2600',
    cores: [
      {
        name: 'Stella',
        filename: 'stella_libretro'
      }
    ]
  },
  {
    name: 'Nintendo Entertainment System',
    cores: [
      {
        name: 'FCEUmm',
        filename: 'fceumm_libretro'
      }
    ]
  },
  // {
  //   name: 'Super Nintendo Entertainment System',
  //   cores: [
  //     {
  //       name: 'Higan',
  //       filename: 'higan_sfc_libretro'
  //     }
  //   ]
  // },
  {
    name: 'Nintendo 64',
    cores: [
      {
        name: 'parallel_n64_libretro',
        filename: 'parallel_n64_libretro'
      }
    ]
  },
  {
    name: 'Game Boy Color',
    cores: [
      {
        name: 'Gambatte',
        filename: 'gambatte_libretro'
      }
    ]
  },
  {
    name: 'Game Boy Advance',
    cores: [
      {
        name: 'mGBA',
        filename: 'mgba_libretro'
      }
    ]
  }
];

export const CORE_TO_PLATFORM_MAPPING: { [key: string]: string } = PLATFORMS.reduce((accumulated, platform) => {

  const cores = platform.cores;

  for (const core of cores) {
    accumulated[core.filename] = platform.name;
  }

  return accumulated;
}, {});
