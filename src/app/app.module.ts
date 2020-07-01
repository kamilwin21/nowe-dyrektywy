import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PierwszyComponent } from './pierwszy/pierwszy.component';

@NgModule({
  declarations: [
    AppComponent,
    PierwszyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
