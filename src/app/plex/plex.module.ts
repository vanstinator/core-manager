import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { PlexComponent } from './plex.component';
import { PlexRoutingModule } from './plex-routing.module';

@NgModule({
  declarations: [PlexComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlexRoutingModule,
    NgbModule,
    NgbToastModule
  ]
})
export class PlexModule { }
