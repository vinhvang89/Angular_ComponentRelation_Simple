import {Component, OnInit} from '@angular/core';
import {IContact} from "./icontact";
import {GroupService} from "../group/group.service";
import {IGroup} from "../group/igroup";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: IContact[] = [];

  groups: IGroup[] = []

  contactFilter = [];

  constructor(private groupService: GroupService,
              private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactFilter = this.contactService.getAll();
    this.groups = this.groupService.getAll();
    this.contacts = this.contactService.getAll()
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
