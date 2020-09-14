import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//first st

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { Demo01Component } from './components/demo01/demo01.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    TodolistComponent,
    Demo01Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //second st
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
