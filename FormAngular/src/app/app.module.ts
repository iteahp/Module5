import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponentComponent } from './component/product-component/product-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShowProductComponent } from './component/show-product/show-product.component';
import { HeadderComponent } from './component/headder/headder.component';
import { TestComponent } from './test/test.component';
import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

export const appRoutes: Routes = [
  { path: 'product', component: ProductComponentComponent },
  { path: 'home', component: ShowProductComponent},
  { path: '', component: ProductComponentComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ShowProductComponent,
    HeadderComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
