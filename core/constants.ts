import { ARCH, Core } from './types';

export const MESSAGE_CHANNEL = {
  coreCheck: 'coreCheck',
  coreResponse: 'coreResponse',
  deleteCore: 'deleteCore',
  downloadCore: 'downloadCore',
  pmsLibraryCheck: 'pmsLibraryCheck',
  downloadProgress: 'downloadProgress'
};

export enum PLATFORMS {

  // Mame
  Arcade = 'Arcade',

  // Atari
  Atari2600 = 'Atari 2600',
  Atari5200 = 'Atari 5200',
  Atari7800 = 'Atari 7800',

  // Nintendo
  GameBoy = 'Game Boy',
  GameBoyColor = 'Game Boy Color',
  GameBoyAdvance = 'Game Boy Advance',
  Nintendo64 = 'Nintendo 64',
  NintendoGameCube = 'nintendo-game-cube',
  NintendoEntertainmentSystem = 'Nintendo Entertainment System',
  SuperNintendoEntertainmentSystem = 'Super Nintendo Entertainment System',

  // Sega
  Sega32x = 'Sega 32X',
  SegaGameGear = 'Game Gear',
  SegaGenesis = 'Sega Genesis',
  SegaMasterSystem = 'Sega Master System',
}

export const CORES: Core[] = [
  {
    name: 'MAME',
    filename: 'mame_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    platforms: [PLATFORMS.Arcade]
  },
  {
    name: 'MAME 2003',
    filename: 'mame2003_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/mame_2003/',
    platforms: [PLATFORMS.Arcade]
  },
  {
    name: 'MAME 2003-Plus',
    filename: 'mame2003_plus_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/mame2003_plus/',
    platforms: [PLATFORMS.Arcade]
  },
  {
    name: 'MAME 2010',
    filename: 'mame2010_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/mame_2010/',
    platforms: [PLATFORMS.Arcade]
  },
  {
    name: 'Stella',
    filename: 'stella_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/stella/',
    platforms: [PLATFORMS.Atari2600]
  },
  {
    name: 'Atari800',
    filename: 'atari800_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/atari800/',
    platforms: [PLATFORMS.Atari5200]
  },
  {
    name: 'ProSystem',
    filename: 'prosystem_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/prosystem/',
    platforms: [PLATFORMS.Atari7800]

  },
  {
    name: 'FCEUmm',
    filename: 'fceumm_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/fceumm/',
    platforms: [PLATFORMS.NintendoEntertainmentSystem]
  },
  {
    name: 'Mesen',
    filename: 'mesen_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/mesen/',
    platforms: [PLATFORMS.NintendoEntertainmentSystem]
  },
  {
    name: 'Nestopia UE',
    filename: 'nestopia_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/nestopia_ue/',
    platforms: [PLATFORMS.NintendoEntertainmentSystem]
  },
  {
    name: 'QuickNES',
    filename: 'quicknes_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/quicknes/',
    platforms: [PLATFORMS.NintendoEntertainmentSystem]

  },
  {
    name: 'bsnes Accuracy',
    filename: 'bsnes2014_accuracy_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/bsnes_accuracy/',
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem]
  },
  {
    name: 'bsnes Balanced',
    filename: 'bsnes2014_balanced_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/bsnes_balanced/',
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem]
  },
  {
    name: 'bsnes Performance',
    filename: 'bsnes2014_performance_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/bsnes_performance/',
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem]
  },
  {
    name: 'bsnes C++98 (v085)',
    filename: 'bsnes_cplusplus98_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/bsnes_cplusplus98/',
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem]
  },
  {
    name: 'bsnes-mercury Accuracy',
    filename: 'bsnes_mercury_accuracy_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/bsnes_mercury_accuracy/',
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem]
  },
  {
    name: 'bsnes-mercury Balanced',
    filename: 'bsnes_mercury_balanced_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/bsnes_mercury_balanced/',
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem]
  },
  {
    name: 'bsnes-mercury Performance',
    filename: 'bsnes_mercury_performance_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/bsnes_mercury_performance/',
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem]
  },
  {
    name: 'higan Accuracy',
    filename: 'higan_sfc_accuracy',
    arch: [ARCH.macOS],
    url: 'https://docs.libretro.com/library/higan_accuracy/',
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem]
  },
  {
    name: 'Mesen-S',
    filename: 'mesen-s_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/mesen-s/',
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem]

  },
  {

    name: 'Mupen64Plus',
    filename: 'mupen64plus_next_libretro',
    arch: [ARCH.win32],
    url: 'https://docs.libretro.com/library/mupen64plus/',
    platforms: [PLATFORMS.Nintendo64]
  },
  {
    name: 'parallel_n64_libretro',
    filename: 'parallel_n64_libretro',
    arch: [ARCH.win32],
    platforms: [PLATFORMS.Nintendo64]
  },
  {
    name: 'Gambatte',
    filename: 'gambatte_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/gambatte/',
    platforms: [PLATFORMS.GameBoy, PLATFORMS.GameBoyColor]
  },
  {
    name: 'SameBoy',
    filename: 'sameboy_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/sameboy/',
    platforms: [PLATFORMS.GameBoy, PLATFORMS.GameBoyColor]
  },
  {
    name: 'TGB Dual',
    filename: 'tgbdual_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/tgb_dual/',
    platforms: [PLATFORMS.GameBoy, PLATFORMS.GameBoyColor]
  },
  {
    name: 'Gearboy',
    filename: 'gearboy_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/gearboy/',
    platforms: [PLATFORMS.GameBoy, PLATFORMS.GameBoyColor]
  },
  {
    name: 'gpSP',
    filename: 'gpsp_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/gpsp/',
    platforms: [PLATFORMS.GameBoyAdvance]
  },
  {
    name: 'Meteor',
    filename: 'meteor_libretro',
    arch: [ARCH.win32],
    url: 'https://docs.libretro.com/library/gpsp/',
    platforms: [PLATFORMS.GameBoyAdvance]
  },
  {
    name: 'mGBA',
    filename: 'mgba_libretro',
    arch: [ARCH.win32],
    url: 'https://docs.libretro.com/library/mgba/',
    platforms: [PLATFORMS.GameBoyAdvance]
  },
  {
    name: 'gpSP',
    filename: 'gpsp_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    url: 'https://docs.libretro.com/library/gpsp/',
    platforms: [PLATFORMS.SegaGenesis]
  }
];
