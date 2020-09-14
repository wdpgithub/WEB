import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PostHtmlComponent } from './components/post-html/post-html.component';

@NgModule({
  declarations: [
    AppComponent,
    PostHtmlComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
