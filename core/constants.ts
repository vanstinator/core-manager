import { ARCH, Core } from './types';

export const MESSAGE_CHANNEL = {
  coreCheck: 'coreCheck',
  coreResponse: 'coreResponse',
  deleteCore: 'deleteCore',
  downloadCore: 'downloadCore',
  pmsLibraryCheck: 'pmsLibraryCheck',
  downloadProgress: 'downloadProgress',
  openLink: 'openLink',
  pmsPath: 'pmsPath'
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
  SegaGameGear = 'Sega Game Gear',
  SegaGenesis = 'Sega Genesis',
  SegaMasterSystem = 'Sega Master System',
}

export const CORE_MAPPING: Core[] = [
  {
    platforms: [PLATFORMS.Arcade],
    name: 'MAME',
    filename: 'mame_libretro',
    arch: [ARCH.win32, ARCH.macOS]
  },
  {
    platforms: [PLATFORMS.Arcade],
    name: 'MAME 2003',
    filename: 'mame2003_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/mame_2003/'
  },
  {
    platforms: [PLATFORMS.Arcade],
    name: 'MAME 2003-Plus',
    filename: 'mame2003_plus_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/mame2003_plus/'
  },
  {
    platforms: [PLATFORMS.Arcade],
    name: 'MAME 2010',
    filename: 'mame2010_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/mame_2010/'
  },
  {
    platforms: [PLATFORMS.Atari2600],
    name: 'Stella',
    filename: 'stella_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/stella/'
  },
  {
    platforms: [PLATFORMS.Atari5200],
    name: 'Atari800',
    filename: 'atari800_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/atari800/'
  },
  {
    platforms: [PLATFORMS.Atari7800],
    name: 'ProSystem',
    filename: 'prosystem_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/prosystem/'

  },
  {
    platforms: [PLATFORMS.NintendoEntertainmentSystem],
    name: 'FCEUmm',
    filename: 'fceumm_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/fceumm/'
  },
  {
    platforms: [PLATFORMS.NintendoEntertainmentSystem],
    name: 'Mesen',
    filename: 'mesen_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/mesen/'
  },
  {
    platforms: [PLATFORMS.NintendoEntertainmentSystem],
    name: 'Nestopia UE',
    filename: 'nestopia_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/nestopia_ue/'
  },
  {
    platforms: [PLATFORMS.NintendoEntertainmentSystem],
    name: 'QuickNES',
    filename: 'quicknes_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/quicknes/'

  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'bsnes Accuracy',
    filename: 'bsnes2014_accuracy_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/bsnes_accuracy/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'bsnes Balanced',
    filename: 'bsnes2014_balanced_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/bsnes_balanced/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'bsnes Performance',
    filename: 'bsnes2014_performance_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/bsnes_performance/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'bsnes C++98 (v085)',
    filename: 'bsnes_cplusplus98_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/bsnes_cplusplus98/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'bsnes-mercury Accuracy',
    filename: 'bsnes_mercury_accuracy_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/bsnes_mercury_accuracy/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'bsnes-mercury Balanced',
    filename: 'bsnes_mercury_balanced_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/bsnes_mercury_balanced/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'bsnes-mercury Performance',
    filename: 'bsnes_mercury_performance_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/bsnes_mercury_performance/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'higan Accuracy',
    filename: 'higan_sfc_accuracy',
    arch: [ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/higan_accuracy/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem, PLATFORMS.GameBoy, PLATFORMS.GameBoyColor],
    name: 'Mesen-S',
    filename: 'mesen-s_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/mesen-s/'

  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'Snes9x 2002',
    filename: 'snes9x2002_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/snes9x_2002/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'Snes9x 2005 Plus',
    filename: 'snes9x2005_plus_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/snes9x_2005_plus/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'Snes9x 2005',
    filename: 'snes9x2005_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/snes9x_2005/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'Snes9x 2010',
    filename: 'snes9x2010_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/snes9x_2010/'
  },
  {
    platforms: [PLATFORMS.SuperNintendoEntertainmentSystem],
    name: 'Snes9x',
    filename: 'snes9x_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/snes9x/'
  },
  {
    platforms: [PLATFORMS.Nintendo64],
    name: 'Mupen64Plus',
    filename: 'mupen64plus_next_libretro',
    arch: [ARCH.win32],
    infoUrl: 'https://docs.libretro.com/library/mupen64plus/'
  },
  {
    platforms: [PLATFORMS.Nintendo64],
    name: 'parallel_n64_libretro',
    filename: 'parallel_n64_libretro',
    arch: [ARCH.win32]
  },
  {
    platforms: [PLATFORMS.GameBoy, PLATFORMS.GameBoyColor],
    name: 'Gambatte',
    filename: 'gambatte_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/gambatte/'
  },
  {
    platforms: [PLATFORMS.GameBoy, PLATFORMS.GameBoyColor],
    name: 'SameBoy',
    filename: 'sameboy_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/sameboy/'
  },
  {
    platforms: [PLATFORMS.GameBoy, PLATFORMS.GameBoyColor],
    name: 'TGB Dual',
    filename: 'tgbdual_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/tgb_dual/'
  },
  {
    platforms: [PLATFORMS.GameBoy, PLATFORMS.GameBoyColor],
    name: 'Gearboy',
    filename: 'gearboy_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/gearboy/'
  },
  {
    platforms: [PLATFORMS.GameBoyAdvance],
    name: 'gpSP',
    filename: 'gpsp_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/gpsp/'
  },
  {
    platforms: [PLATFORMS.GameBoyAdvance],
    name: 'Meteor',
    filename: 'meteor_libretro',
    arch: [ARCH.win32],
    infoUrl: 'https://docs.libretro.com/library/gpsp/'
  },
  {
    platforms: [PLATFORMS.GameBoyAdvance],
    name: 'mGBA',
    filename: 'mgba_libretro',
    arch: [ARCH.win32],
    infoUrl: 'https://docs.libretro.com/library/mgba/'
  },
  {
    platforms: [PLATFORMS.SegaMasterSystem, PLATFORMS.SegaGameGear],
    name: 'SMS Plus GX',
    filename: 'smsplus_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/smsplus/'
  },
  {
    platforms: [PLATFORMS.SegaMasterSystem, PLATFORMS.SegaGameGear],
    name: 'Gearsystem',
    filename: 'gearsystem_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/gearsystem/'
  },
  {
    platforms: [PLATFORMS.SegaMasterSystem, PLATFORMS.SegaGameGear, PLATFORMS.SegaGenesis],
    name: 'Genesis Plus GX',
    filename: 'genesis_plus_gx_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/genesis_plus_gx/'
  },
  {
    platforms: [PLATFORMS.SegaMasterSystem, PLATFORMS.SegaGameGear, PLATFORMS.SegaGenesis, PLATFORMS.Sega32x],
    name: 'PicoDrive',
    filename: 'picodrive_libretro',
    arch: [ARCH.win32, ARCH.macOS],
    infoUrl: 'https://docs.libretro.com/library/picodrive/'
  }
];

export const CORES = [];

for (const core of CORE_MAPPING) {
  for (const platform of core.platforms) {
    CORES.push({
      ...core,
      platforms: [platform]
    });
  }
}
