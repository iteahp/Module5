import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './component/city/city.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CreateCityComponent } from './component/create-city/create-city.component';
import { DetailCityComponent } from './component/detail-city/detail-city.component';
import { EditCityComponent } from './component/edit-city/edit-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CreateCityComponent,
    DetailCityComponent,
    EditCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
