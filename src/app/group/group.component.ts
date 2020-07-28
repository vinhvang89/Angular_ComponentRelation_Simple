import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groups : group[] = [
    new group(1 ,"Tử hình"), new group(2, "Tù chung thân")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
class group {
  id : number;
  name: string;

  constructor(id,name) {
    this.id = id;
    this.name = name;

  }

}
