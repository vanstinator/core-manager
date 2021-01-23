import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { MESSAGE_CHANNEL, PLATFORMS } from '../../../core/constants';
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

  platforms = PLATFORMS;

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
      this.platforms = PLATFORMS.filter(p => p.name === this.model || !!p.cores.some(c => c.name === this.model));
      this.platforms.map(p => p.cores = p.cores.filter(c => c.filename === this.model));
    } else {
      this.platforms = PLATFORMS;
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      map(term => this.filter(term.toLocaleLowerCase()))
    );

  filter(term: string): any[] {
    const results = [];

    let platformResults;
    let coreResults;
    if (term.length > 1) {
      platformResults = this.platforms.filter(p => p.name.toLowerCase().startsWith(term)).map(p => p.name);
      if (platformResults.length) {
        results.push(...platformResults);
      }
      for (const platform of this.platforms) {
        coreResults = platform.cores.filter(c => c.filename.toLowerCase().startsWith(term)).map(c => c.filename);
        if (coreResults.length) {
          results.push(...coreResults);
        }
      }
    }

    return results.splice(0, 10);
  }

  ngOnInit(): void {
    this.activeIds = [];
    for (let i = 0; i < PLATFORMS.length; i++) {
      this.activeIds.push(`ngb-panel-${i}`);
    }

    window.api.electronIpcInvoke(MESSAGE_CHANNEL.pmsLibraryCheck).then((result: boolean) => {
      this.config.showHint = true;
      this.pmsLibraryExists = result;

      window.api.electronIpcInvoke(MESSAGE_CHANNEL.coreCheck).then((results: PlatformCoreMapping[]) => {
        if (results.length) {
          for (const result of results) {
            const core = this.platforms.find(platform => platform.name === result.platformName)?.cores.find(core => core.filename === result.core);
            core.downloaded = true;
          }
        }
      });
    });
  }

}
