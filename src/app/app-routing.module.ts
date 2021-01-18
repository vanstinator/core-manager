import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlexRoutingModule } from './plex/plex-routing.module';
import { PageNotFoundComponent } from './shared/components';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'plex',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    PlexRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
