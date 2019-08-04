import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/EmployeeModel';
import { DeleteService } from 'src/app/delete.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[DeleteService]
})
export class EmployeeListComponent implements OnInit {

  constructor(public deleteService:DeleteService) { }
  key: number;
  name: string;
  dateOfBirth: Date;
  positionHeld: string;

  employees:Array<EmployeeModel> = [
    {
        "key": 1,
        "name": "ABC",
        "dateOfBirth": new Date(),
        "positionHeld": "Manager"
    },
    {
        "key": 2,
        "name": "John",
        "dateOfBirth": new Date(),
        "positionHeld": "Manager"
    },
    {
        "key": 3,
        "name": "Michael",
        "dateOfBirth": new Date(),
        "positionHeld": "Manager"
    },
    {
        "key": 4,
        "name": "Michael",
        "dateOfBirth": new Date(),
        "positionHeld": "Manager"
    },
    {
        "key": 5,
        "name": "Michael",
        "dateOfBirth": new Date(),
        "positionHeld": "Manager"
    },
    {
        "key": 6,
        "name": "Michael",
        "dateOfBirth": new Date(),
        "positionHeld": "Manager"
    }
];
  ngOnInit() {
  }

  deleteFn_Parent(key){
     console.log("delete key",key);
     this.deleteService.deleteList(this.employees,key);
    
  }

}
