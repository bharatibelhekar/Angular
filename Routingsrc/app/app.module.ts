import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OscompComponent } from './oscomp/oscomp.component';
import { PlcompComponent } from './plcomp/plcomp.component';
import { DbcompComponent } from './dbcomp/dbcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    OscompComponent,
    PlcompComponent,
    DbcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
