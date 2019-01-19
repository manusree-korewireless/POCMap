import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapLocComponent } from './tracking/map-loc.component';

const routes: Routes = [
    { path: 'map', component: MapLocComponent },
    { path: '', redirectTo: 'map', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
