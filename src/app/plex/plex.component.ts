import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MESSAGE_CHANNEL } from '../../../core/constants';
import { Core } from '../../../core/types';
import { ElectronApiService } from '../core/services/electron-api.service';

@Component({
  selector: 'app-plex',
  templateUrl: './plex.component.html',
  styleUrls: ['./plex.component.scss']
})

export class PlexComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  cores: Core[] = [];
  dataSource = new MatTableDataSource(this.cores);

  pmsPath;

  uniqueCorePlatforms: string[] = [];

  pmsLibraryExists = undefined;

  advancedToggle = new FormControl();
  coreFilterControl = new FormControl();
  plexDataPathControl = new FormControl();

  filteredOptions: Observable<string[]>;
  filter: string;

  constructor(
    public dialog: MatDialog,
    private _electronService: ElectronApiService,
    private _ref: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) { }

  download($core: Core): void {
    this.cores.map(c => c.disabled = true);
    this._electronService.ipcSend<Core>(MESSAGE_CHANNEL.downloadCore, $core);
  }

  // async update($core: PlatformCore): Promise<void> {
  //   await window.api.electronIpcInvoke(MESSAGE_CHANNEL.downloadCore, $core.filename);
  //   $core.needsUpdate = false;
  // }

  async delete($core: Core): Promise<void> {
    await this._electronService.ipcInvoke(MESSAGE_CHANNEL.deleteCore, $core);
    $core.isDownloaded = false;
    $core.needsUpdate = false;
    this.coreCheck();
  }

  coreCheck(): void {
    this._electronService.ipcSend(MESSAGE_CHANNEL.coreCheck);
  }

  openLink(core: Core): void {
    this._electronService.ipcInvoke(MESSAGE_CHANNEL.openLink, core.filename);
  }

  private _filter(platform: string): string[] {
    console.log(platform);
    const filterValue = platform.toLowerCase();

    return this.uniqueCorePlatforms.filter(p =>
      p.toLowerCase().includes(filterValue)
    );
  }

  filterUnique(value, index, self): boolean {
    return self.indexOf(value) === index;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

  async updatePath() {
    await this._electronService.ipcInvoke<string>(MESSAGE_CHANNEL.pmsPath, this.plexDataPathControl.value);
    await this.testPlexDataPath();
    // TODO this is stupid and shouldn't be needed. Will likely fix itself when I refactor the electron services into observables
    this._ref.detectChanges();
  }

  async testPlexDataPath() {
    this.pmsLibraryExists = await this._electronService.ipcInvoke<boolean>(MESSAGE_CHANNEL.pmsLibraryCheck);
  }

  ngOnInit(): void {

    this.coreCheck();

    this.testPlexDataPath().then();

    this._electronService.ipcInvoke<string>(MESSAGE_CHANNEL.pmsPath).then((result: string) => {
      this.plexDataPathControl.setValue(result);
    });

    this.filteredOptions = this.coreFilterControl.valueChanges
      .pipe(
        map(value => value ? this._filter(value) : this.uniqueCorePlatforms.slice())
      );

    this.advancedToggle.valueChanges.subscribe(() => {
      this.coreCheck();
    });

    this.coreFilterControl.valueChanges.subscribe(value => {
      if (this.uniqueCorePlatforms.includes(value) || !value) {
        this.filter = value;
        this.coreCheck();
      }
    });

    this._electronService.ipcOn(MESSAGE_CHANNEL.coreResponse, (event, data: Core[]) => {
      this.cores = data;
      this.cores.map(core => {
        core.disabled = this.cores.some(c => c.platforms.includes(core.platform) && (c.isDownloaded || c.downloadProgress > 0));
      });

      // eslint-disable-next-line @typescript-eslint/unbound-method
      this.uniqueCorePlatforms = this.cores.map(core => core.platform).filter(this.filterUnique);

      if (this.filter) {
        this.cores = this.cores.filter(core => core.platform === this.filter);
      }

      this.dataSource = new MatTableDataSource(this.cores);
      this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
        if (typeof data[sortHeaderId] === 'string') {
          return data[sortHeaderId].toLocaleLowerCase();
        }

        return data[sortHeaderId];
      };
      this.dataSource.sort = this.sort;

      if (!this.advancedToggle.value) {
        this.dataSource.data = this.dataSource.data.filter(core => !core.hidden);
      }
    });

    this._electronService.ipcOn(MESSAGE_CHANNEL.downloadProgress, (event, data) => {
      const core = this.cores.find(core => core.filename === data.filename && core.platform === data.platform);
      if (data.progress > 100) {
        core.isDownloaded = true;
        core.downloadProgress = undefined;
      } else {
        core.downloadProgress = data.progress;
      }
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
