import { Injectable } from '@angular/core';
import {IGroup} from "./igroup";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
   groups : IGroup[] =[
    {
      id : 1 ,
      name : "Tử hình"
    },
    {
      id : 2 ,
      name : "Chung thân"
    },
    {
      id : 3 ,
      name : "Tạm giam"
    }
  ]
  constructor() { }
  getAll() : IGroup[] {
     return this.groups;
  }
  getById(id : number) : IGroup{
    for (let i = 0; i < this.groups.length ; i++) {
      if( this.groups[i].id == id)
        return this.groups[i];
      else
        return null;
    }
  }
}
