import { Injectable } from '@angular/core';
import {IContact} from "./icontact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts : IContact[] = [
    {
      id: 1,
      name: "Trump",
      email: "donald_trump@gov.us",
      group_id : 2
    },
    {
      id: 2,
      name: "Biden",
      email: "fuck_u_trump@gov.us",
      group_id : 3
    },
    {
      id: 3,
      name: "Phúc",
      email: "dkm_trump+biden@gov.vn",
      group_id : 1
    }
  ]
  constructor() { }

  getAll() :IContact[] {
    return this.contacts;
  }

  add(contact: IContact) :void{
    this.contacts.push(contact);
  }
  getById(id : number) : IContact{
    for (let i = 0; i < this.contacts.length ; i++) {
      if( id == this.contacts[i].id)
        return this.contacts[i];
      else
        return null;
    }
  }
}
