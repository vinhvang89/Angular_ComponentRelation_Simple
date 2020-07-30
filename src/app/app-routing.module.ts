import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {SearchComponent} from "./search/search.component";
import {ContactCreateComponent} from "./contact-create/contact-create.component";
import {ContactEditComponent} from "./contact-edit/contact-edit.component";

const routes: Routes = [{path : "create",component : ContactCreateComponent},
  {path:'',component:ContactComponent},
  {path:'/contacts/edit/:id',component : ContactEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
