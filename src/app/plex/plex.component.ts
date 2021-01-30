import { Component, NgZone, OnInit } from '@angular/core';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { CORES, MESSAGE_CHANNEL } from '../../../core/constants';
import { Core } from '../../../core/types';
import { ElectronApiService } from '../core/services/electron-api.service';

@Component({
  selector: 'app-plex',
  templateUrl: './plex.component.html',
  styleUrls: ['./plex.component.scss'],
  providers: [NgbTypeaheadConfig] // add NgbTypeaheadConfig to the component providers
})

export class PlexComponent implements OnInit {

  public model: any;

  pmsLibraryExists = undefined;

  constructor(
    private config: NgbTypeaheadConfig,
    private electronService: ElectronApiService
  ) { }

  downloaded = false;
  needsUpdate = false;

  cores: Core[] = [];

  activeIds = [];

  download($core: Core): void {
    this.cores.map(c => c.disabled = true);
    this.electronService.ipcSend<Core>(MESSAGE_CHANNEL.downloadCore, $core);
  }

  // async update($core: PlatformCore): Promise<void> {
  //   await window.api.electronIpcInvoke(MESSAGE_CHANNEL.downloadCore, $core.filename);
  //   $core.needsUpdate = false;
  // }

  async delete($core: Core): Promise<void> {
    await this.electronService.ipcInvoke(MESSAGE_CHANNEL.deleteCore, $core);
    $core.isDownloaded = false;
    $core.needsUpdate = false;
    this.coreCheck();
  }

  select(): void {
    if (this.model) {
      this.cores = CORES.filter(core => core.platforms.includes(this.model) || core.name === this.model);
    } else if (this.cores.length !== CORES.length) {
      this.coreCheck();
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(10),
      distinctUntilChanged(),
      map(term => this.filter(term.toLocaleLowerCase()))
    );

  filter(term: string): any[] {
    const results = [];
    if (term.length > 1) {
      results.push(...this.cores.filter(core => core.name.toLowerCase().startsWith(term)).map(core => core.name));
      // eslint-disable-next-line @typescript-eslint/unbound-method
      results.push(...this.cores.flatMap(core => core.platforms).filter(platform => platform.toLowerCase().startsWith(term)).filter(this.onlyUnique));
    }

    return results.splice(0, 10);
  }

  onlyUnique(value, index, self): boolean {
    return self.indexOf(value) === index;
  }

  coreCheck(): void {
    this.electronService.ipcSend(MESSAGE_CHANNEL.coreCheck);
  }

  openLink(core: Core): void {
    this.electronService.ipcInvoke(MESSAGE_CHANNEL.openLink, core.filename);
  }

  ngOnInit(): void {

    this.coreCheck();

    this.electronService.ipcOn(MESSAGE_CHANNEL.coreResponse, (event, data: Core[]) => {
      this.cores = data;
      this.cores.map(core => {
        core.disabled = this.cores.some(c => c.platforms.includes(core.platforms[0]) && (c.isDownloaded || c.downloadProgress > 0));
      });
    });

    this.electronService.ipcOn(MESSAGE_CHANNEL.downloadProgress, (event, data) => {
      const core = this.cores.find(core => core.filename === data.filename && core.platforms[0] === data.platform);
      if (data.progress >= 100) {
        core.isDownloaded = true;
        core.downloadProgress = undefined;
      } else {
        core.downloadProgress = data.progress;
      }
    });

    this.electronService.ipcInvoke<boolean>(MESSAGE_CHANNEL.pmsLibraryCheck).then((result: boolean) => {
      this.config.showHint = true;
      this.pmsLibraryExists = result;
    });
  }
}
