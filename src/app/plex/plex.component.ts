import { Component, NgZone, OnInit } from '@angular/core';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { CORES, MESSAGE_CHANNEL } from '../../../core/constants';
import { PlatformCore } from '../../../core/types';

@Component({
  selector: 'app-plex',
  templateUrl: './plex.component.html',
  styleUrls: ['./plex.component.scss'],
  providers: [NgbTypeaheadConfig] // add NgbTypeaheadConfig to the component providers
})

export class PlexComponent implements OnInit {

  public model: any;

  pmsLibraryExists = undefined;

  constructor(private config: NgbTypeaheadConfig, private zone: NgZone) { }

  downloaded = false;
  needsUpdate = false;

  cores = CORES;

  activeIds = [];

  download($core: PlatformCore): void {
    this.cores.map(c => c.disabled = true);
    window.api.electronIpcSend(MESSAGE_CHANNEL.downloadCore, $core.filename);
  }

  // async update($core: PlatformCore): Promise<void> {
  //   await window.api.electronIpcInvoke(MESSAGE_CHANNEL.downloadCore, $core.filename);
  //   $core.needsUpdate = false;
  // }

  async delete($core: PlatformCore): Promise<void> {
    await window.api.electronIpcInvoke(MESSAGE_CHANNEL.deleteCore, $core.filename);
    $core.isDownloaded = false;
    $core.needsUpdate = false;
    this.coreCheck();
  }

  select(): void {
    if (this.model) {
      this.cores = CORES.filter(core => core.platform === this.model || core.name === this.model);
    } else {
      this.cores = CORES;
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
      results.push(...this.cores.filter(core => core.platform.toLowerCase().startsWith(term)).map(core => core.platform).filter(this.onlyUnique));
    }

    return results.splice(0, 10);
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  coreCheck() {
    window.api.electronIpcSend(MESSAGE_CHANNEL.coreCheck, []);
  }

  ngOnInit(): void {

    this.coreCheck();

    window.api.electronIpcOn(MESSAGE_CHANNEL.coreResponse, (event, data) => {
      this.zone.run(() => {
        this.cores.map(core => {
          core.isDownloaded = data.some(d => d.core === core.filename);
        });
        this.cores.map(core => {
          core.disabled = this.cores.some(c => c.platform === core.platform && (c.isDownloaded || c.downloadProgress > 0));
        });
      });
    });

    window.api.electronIpcOn(MESSAGE_CHANNEL.downloadProgress, (event, data) => {
      this.zone.run(() => {
        if (data.progress >= 100) {
          this.cores.find(core => core.filename === data.name).isDownloaded = true;
          this.cores.find(core => core.filename === data.name).downloadProgress = undefined;
        } else {
          this.cores.find(core => core.filename === data.name).downloadProgress = data.progress;
        }
      });
    });

    window.api.electronIpcInvoke(MESSAGE_CHANNEL.pmsLibraryCheck).then((result: boolean) => {
      this.config.showHint = true;
      this.pmsLibraryExists = result;
    });
  }
}
