import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
