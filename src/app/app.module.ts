import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { GroupComponent } from './group/group.component';
import { SearchComponent } from './search/search.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GroupComponent,
    SearchComponent,
    ContactCreateComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
