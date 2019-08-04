import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Delete1Service {

  constructor() { }

  deleteList(list,key){
    console.log("delete 12222 ",list,key);
   }
}
