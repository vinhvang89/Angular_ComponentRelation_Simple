import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  constructor() { }
  keyword : string ;

  ngOnInit(): void {
  }
  getInput(event){
    this.keyword = event;
  }
}

