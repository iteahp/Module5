import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCityComponent} from "./component/create-city/create-city.component";
import {CityComponent} from "./component/city/city.component";
import {DetailCityComponent} from "./component/detail-city/detail-city.component";
import {EditCityComponent} from "./component/edit-city/edit-city.component";

const routes: Routes = [
  {path: 'create',component:CreateCityComponent},
  {path: '',component:CityComponent},
  {path: 'detail/:id' ,component:DetailCityComponent},
  {path: 'edit/:id' ,component:EditCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
