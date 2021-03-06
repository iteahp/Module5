import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowBookComponent } from './show-book/show-book.component';
import {HttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ShowBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
