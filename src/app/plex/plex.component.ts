import { Component, OnInit } from '@angular/core';

import { Platform, PlatformCore } from '../../../core/types';
import { ElectronService } from '../core/services';
import { MESSAGE_CHANNEL } from '../../../core/constants'
@Component({
  selector: 'app-plex',
  templateUrl: './plex.component.html',
  styleUrls: ['./plex.component.scss']
})
export class PlexComponent implements OnInit {

  pmsLibraryExists = undefined;

  constructor(private electron: ElectronService) { }

  downloaded = false;
  needsUpdate = false;

  platforms: Platform[] = [
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

  async download($core: PlatformCore): Promise<void> {
    console.log($core);
    await window.api.electronIpcInvoke(MESSAGE_CHANNEL.downloadCore, $core.filename);
    console.log('done!');
    $core.downloaded = true;
    $core.needsUpdate = true;
  }

  update($core: PlatformCore): void {
    console.log($core);
    $core.needsUpdate = false;
  }

  delete($core: PlatformCore): void {
    console.log('update');
    $core.needsUpdate = false;
    $core.downloaded = false;
  }

  ngOnInit(): void {
    window.api.electronIpcInvoke(MESSAGE_CHANNEL.pmsLibraryCheck).then((result: boolean) => {
      this.pmsLibraryExists = result;
      console.log(`pmsLibraryExists: ${result.toString()}`);
    });
  }

}
