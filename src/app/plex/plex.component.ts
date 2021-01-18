import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-plex',
  templateUrl: './plex.component.html',
  styleUrls: ['./plex.component.scss']
})
export class PlexComponent implements OnInit {

  private win32Path = '%LOCALAPPDATA%\\Plex Media Server\\';
  private macOSPath = '~/Library/Application Support/Plex Media Server/';

  pmsLibraryExists = undefined;

  constructor(private electron: ElectronService) { }

  ngOnInit(): void {
    window.api.electronIpcInvoke('pmsCheck').then((result: boolean) => {
      this.pmsLibraryExists = result;
      console.log(`pmsLibraryExists: ${result.toString()}`);
    });
  }

}
