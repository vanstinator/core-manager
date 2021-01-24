import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { CORES, MESSAGE_CHANNEL, PLATFORMS } from '../../../core/constants';
import { PlatformCore, PlatformCoreMapping } from '../../../core/types';

@Component({
  selector: 'app-plex',
  templateUrl: './plex.component.html',
  styleUrls: ['./plex.component.scss'],
  providers: [NgbTypeaheadConfig] // add NgbTypeaheadConfig to the component providers
})

export class PlexComponent implements OnInit {

  public model: any;

  pmsLibraryExists = undefined;

  constructor(private config: NgbTypeaheadConfig) { }

  downloaded = false;
  needsUpdate = false;

  cores = CORES;

  activeIds = [];

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
      results.push(...this.cores.filter(core => core.platform.toLowerCase().startsWith(term)).map(core => core.platform).filter(this.onlyUnique));
    }

    return results.splice(0, 10);
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  ngOnInit(): void {
    window.api.electronIpcInvoke(MESSAGE_CHANNEL.pmsLibraryCheck).then((result: boolean) => {
      this.config.showHint = true;
      this.pmsLibraryExists = result;

      window.api.electronIpcInvoke(MESSAGE_CHANNEL.coreCheck).then((results: PlatformCoreMapping[]) => {
        if (results.length) {
          for (const result of results) {
            const core = this.cores.find(core => core.platform === result.platformName || core.filename === result.core);
            core.downloaded = true;
          }
        }
      });
    });
  }

}
