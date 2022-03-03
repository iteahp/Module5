import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateBookComponent} from "./create-book/create-book.component";
import {ShowBooksComponent} from "./show-books/show-books.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";

const routes: Routes = [
  {path: 'create',component:CreateBookComponent},
  {path: '',component:ShowBooksComponent},
  {path: 'detail/:id' ,component:DetailBookComponent},
  {path: 'edit/:id' ,component:EditBookComponent},
  {path: 'delete/:id' ,component:DeleteBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
