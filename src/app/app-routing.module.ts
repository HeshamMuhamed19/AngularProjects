import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooklistComponent} from "./booklist/booklist.component";
import {AppComponent} from "./app.component";
import {CrudComponent} from "./crud/crud.component";
import {DetailsComponent} from "./details/details.component";
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";

const routes: Routes = [
  {path : '' , component :CrudComponent },
  {path : "book-list" , component : BooklistComponent} ,
  { path: 'book/:id', component: DetailsComponent },
  {path : 'book/show/:id' , component : ShowComponent},
  { path: 'add', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
