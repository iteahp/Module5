import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCityComponent} from "./component/create-city/create-city.component";
import {CityComponent} from "./component/city/city.component";

const routes: Routes = [
  {path: 'create',component:CreateCityComponent},
  {path: '',component:CityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
