import { Component, OnInit } from '@angular/core';

import { MESSAGE_CHANNEL, PLATFORMS } from '../../../core/constants';
import { Platform, PlatformCore } from '../../../core/types';
import { ElectronService } from '../core/services';
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

  platforms = PLATFORMS;

  async download($core: PlatformCore): Promise<void> {
    await window.api.electronIpcInvoke(MESSAGE_CHANNEL.downloadCore, $core.filename);
    $core.downloaded = true;
    $core.needsUpdate = true;
  }

  // async update($core: PlatformCore): Promise<void> {
  //   await window.api.electronIpcInvoke(MESSAGE_CHANNEL.downloadCore, $core.filename);
  //   $core.needsUpdate = false;
  // }

  async delete($core: PlatformCore): Promise<void> {
    await window.api.electronIpcInvoke(MESSAGE_CHANNEL.deleteCore, $core.filename);
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
