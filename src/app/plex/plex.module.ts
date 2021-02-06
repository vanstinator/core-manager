import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { NG_SCROLLBAR_OPTIONS, NgScrollbarModule } from 'ngx-scrollbar';

import { MaterialModule } from '../material-module';
import { SharedModule } from '../shared/shared.module';
import { PlexComponent } from './plex.component';
import { PlexRoutingModule } from './plex-routing.module';

@NgModule({
  declarations: [PlexComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    NgScrollbarModule,
    PlexRoutingModule,
    SharedModule
  ]
})
export class PlexModule { }
