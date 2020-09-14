import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { Son01Component } from './components/son01/son01.component';
import { Son02Component } from './components/son02/son02.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent,
    Son01Component,
    Son02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
