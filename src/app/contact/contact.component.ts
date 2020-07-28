import {Component, OnInit} from '@angular/core';
import {IContact} from "../icontact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactFilter = [];
  filter: string='';
  constructor() {
  }

  contacts: IContact[] = [
    {
      id: 1,
      name: "Trump",
      email: "donald_trump@gov.us"
    },
    {
      id: 2,
      name: "Biden",
      email: "fuck_u_trump@gov.us"
    },
    {
      id: 3,
      name: "Phúc",
      email: "dkm_trump+biden@gov.vn"
    }
  ]

  ngOnInit(): void {
    this.contactFilter = this.contacts;
  }

  search(event) {
    this.contactFilter = (event) ? this.filterByKeyword(event) : this.contacts;
  }

  filterByKeyword(keyword) {
    return this.contacts.filter(
      contact => {
        return contact.name.indexOf(keyword) != -1;
      }
    )
  }

  delete(id) {
    let remain = [];
    this.contactFilter.map(contact => {
      if (contact.id != id) {
        remain.push(contact)
      }
    })
    this.contactFilter = remain;
  }
}
