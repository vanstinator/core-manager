import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronApiService {

  constructor(
    private zone: NgZone
  ) { }

  ipcInvoke<T>(channel: string, any?: any): Promise<T> {
    return window.api.electronIpcInvoke(channel, any);
  }

  ipcOn(channel: string, listener: (event: any, ...arg: any) => void): void {
    window.api.electronIpcOn(channel, (event: any, data: any) => this.zone.run(() => { listener(event, data); }));
  }

  ipcSend(channel: string, any?: any): void {
    window.api.electronIpcSend(channel, any);
  }

}
