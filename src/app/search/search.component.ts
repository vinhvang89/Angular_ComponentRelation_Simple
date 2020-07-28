import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() keyword : EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  getKeyword(event){
    let value = event.target.value ;
    this.keyword.emit(value);
  }
}
