import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlexComponent } from './plex.component';

import { PlexRoutingModule } from './plex-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PlexComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlexRoutingModule
  ]
})
export class PlexModule { }
