import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact/contact.service";
import {GroupService} from "../group/group.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {IGroup} from "../group/igroup";

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  createForm : FormGroup;
  groups : IGroup[];
  constructor(
      private contactService : ContactService,
      private groupService : GroupService ,
      private fb : FormBuilder,
      private rt : Router
  ) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      id : [''],
      name : [''],
      email : [''],
      group_id : ['']
    })
    this.groups = this.groupService.getAll();
  }
  get name() {
    return this.createForm.get('name');
  }

  get email() {
    return this.createForm.get('email');
  }
  submit() : void {
    let data = this.createForm.value;
    data.group_id = Number(data.group_id);
    this.contactService.add(data);
    this.rt.navigate(['']);

  }
}
