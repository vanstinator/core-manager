import { ARCH, Platform } from './types';

export const MESSAGE_CHANNEL = {
  coreCheck: 'coreCheck',
  deleteCore: 'deleteCore',
  downloadCore: 'downloadCore',
  pmsLibraryCheck: 'pmsLibraryCheck'
};

export const PLATFORMS: Platform[] = [
  {
    name: 'Arcade',
    cores: [
      {
        name: 'MAME',
        filename: 'mame_libretro',
        arch: [ARCH.win32, ARCH.macOS],
      },
      {
        name: 'MAME 2003',
        filename: 'mame2003_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/mame_2003/'
      },
      {
        name: 'MAME 2003-Plus',
        filename: 'mame2003_plus_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/mame2003_plus/'
      },
      {
        name: 'MAME 2010',
        filename: 'mame2010_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/mame_2010/'
      }
    ]
  },
  {
    name: 'Atari 2600',
    cores: [
      {
        name: 'Stella',
        filename: 'stella_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/stella/'
      }
    ]
  },
  {
    name: 'Atari 5200',
    cores: [
      {
        name: 'Atari800',
        filename: 'atari800_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/atari800/'
      }
    ]
  },
  {
    name: 'Atari 7800',
    cores: [
      {
        name: 'ProSystem',
        filename: 'prosystem_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/prosystem/'
      }
    ]
  },
  {
    name: 'Nintendo Entertainment System',
    cores: [
      {
        name: 'FCEUmm',
        filename: 'fceumm_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/fceumm/'
      },
      {
        name: 'Mesen',
        filename: 'mesen_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/mesen/'
      },
      {
        name: 'Nestopia UE',
        filename: 'nestopia_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/nestopia_ue/'
      },
      {
        name: 'QuickNES',
        filename: 'quicknes_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/quicknes/'
      }
    ]
  },
  {
    name: 'Super Nintendo Entertainment System',
    cores: [
      {
        name: 'bsnes Accuracy',
        filename: 'bsnes2014_accuracy_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/bsnes_accuracy/'
      },
      {
        name: 'bsnes Balanced',
        filename: 'bsnes2014_balanced_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/bsnes_balanced/'
      },
      {
        name: 'bsnes Performance',
        filename: 'bsnes2014_performance_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/bsnes_performance/'
      },
      {
        name: 'bsnes C++98 (v085)',
        filename: 'bsnes_cplusplus98_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/bsnes_cplusplus98/'
      },
      {
        name: 'bsnes-mercury Accuracy',
        filename: 'bsnes_mercury_accuracy_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/bsnes_mercury_accuracy/'
      },
      {
        name: 'bsnes-mercury Balanced',
        filename: 'bsnes_mercury_balanced_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/bsnes_mercury_balanced/'
      },
      {
        name: 'bsnes-mercury Performance',
        filename: 'bsnes_mercury_performance_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/bsnes_mercury_performance/'
      },
      {
        name: 'higan Accuracy',
        filename: 'higan_sfc_accuracy',
        arch: [ARCH.macOS],
        url: 'https://docs.libretro.com/library/higan_accuracy/'
      },
      {
        name: 'Mesen-S',
        filename: 'mesen-s_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/mesen-s/'
      }
    ]
  },
  {
    name: 'Nintendo 64',
    cores: [
      {
        name: 'Mupen64Plus',
        filename: 'mupen64plus_next_libretro',
        arch: [ARCH.win32],
        url: 'https://docs.libretro.com/library/mupen64plus/'
      },
      {
        name: 'parallel_n64_libretro',
        filename: 'parallel_n64_libretro',
        arch: [ARCH.win32]
      }
    ]
  },
  {
    name: 'Game Boy',
    cores: [
      {
        name: 'Gambatte',
        filename: 'gambatte_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/gambatte/'
      },
      {
        name: 'SameBoy',
        filename: 'sameboy_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/sameboy/'
      },
      {
        name: 'TGB Dual',
        filename: 'tgbdual_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/tgb_dual/'
      },
      {
        name: 'Gearboy',
        filename: 'gearboy_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/gearboy/'
      }
    ]
  },
  {
    name: 'Game Boy Color',
    cores: [
      {
        name: 'Gambatte',
        filename: 'gambatte_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/gambatte/'
      },
      {
        name: 'SameBoy',
        filename: 'sameboy_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/sameboy/'
      },
      {
        name: 'TGB Dual',
        filename: 'tgbdual_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/tgb_dual/'
      },
      {
        name: 'Gearboy',
        filename: 'gearboy_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/gearboy/'
      }
    ]
  },
  {
    name: 'Game Boy Advance',
    cores: [
      {
        name: 'gpSP',
        filename: 'gpsp_libretro',
        arch: [ARCH.win32, ARCH.macOS],
        url: 'https://docs.libretro.com/library/gpsp/'
      },
      {
        name: 'Meteor',
        filename: 'meteor_libretro',
        arch: [ARCH.win32],
        url: 'https://docs.libretro.com/library/gpsp/'
      },
      {
        name: 'mGBA',
        filename: 'mgba_libretro',
        arch: [ARCH.win32],
        url: 'https://docs.libretro.com/library/mgba/'
      }
    ]
  }
];

export const CORES = flatMap(PLATFORMS, platform => platform.cores.map(core => { return { ...core, platform: platform.name }; })).reverse();

export const CORE_TO_PLATFORM_MAPPING: { [key: string]: string } = PLATFORMS.reduce((accumulated, platform) => {

  const cores = platform.cores;

  for (const core of cores) {
    accumulated[core.filename] = platform.name;
  }

  return accumulated;
}, {});

function flatMap<T, U>(array: T[], mapFunc: (x: T) => U[]) : U[] {
  return array.reduce((cumulus: U[], next: T) => [...mapFunc(next), ...cumulus], <U[]> []);
}
