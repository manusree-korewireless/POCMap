import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { MapLocComponent } from './tracking/map-loc.component';


@NgModule({
  declarations: [
    AppComponent,
    MapLocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoCHGzZmNSFKhEbDjsughQ4x8BXmNvT4&'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
