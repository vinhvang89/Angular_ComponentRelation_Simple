import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact/contact.service";
import {GroupService} from "../group/group.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IGroup} from "../group/igroup";
import {IContact} from "../contact/icontact";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  editForm : FormGroup;
  id : number;
  contact : IContact;
  groups : IGroup[];
  constructor(
    private contactService : ContactService,
    private groupService : GroupService,
    private router : Router,
    private ac : ActivatedRoute,
    private fb : FormBuilder,
  ) {
    this.ac.paramMap.subscribe((paraMap : ParamMap) =>{
      const  id = paraMap.get('id');
      this.id = +id ;
      this.contact = contactService.getById(this.id);
    })
  }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id : [this.contact.id],
      name : [this.contact.name],
      email : [this.contact.email],
      group_id : [this.contact.group_id]
    })
  }
  get name() {
    return this.editForm.get('name');
  }

  get email() {
    return this.editForm.get('email');
  }
}
