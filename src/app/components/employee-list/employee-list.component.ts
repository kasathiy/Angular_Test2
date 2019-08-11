import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/EmployeeModel';
import { DeleteService } from 'src/app/delete.service';
import { EmployeeService } from 'src/app/api/employee/employee.service';
import { IEmployeeDTO } from 'src/app/api/employee/employee.dto';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [DeleteService]
})
export class EmployeeListComponent implements OnInit {

  constructor(public deleteService: DeleteService, public httpService: EmployeeService) { }
  key: number;
  name: string;
  dateOfBirth: Date;
  positionHeld: string;


  ngOnInit() {
    console.log("3333333333");
    this.refreshEmployees();
  }

  refreshEmployees = function () {
    console.log("employees1111");
    this.httpService.getEmployees().subscribe((data) => {
      console.log("data", data);
      this.employees = data.map((employeeDto: IEmployeeDTO) => {
        return EmployeeModel.fromDTO(employeeDto);
      })
    })

  }

  employees: Array<EmployeeListComponent> = [];

  //   employees:Array<EmployeeModel> = [
  //     {
  //         "key": 1,
  //         "name": "ABC",
  //         "dateOfBirth": new Date(),
  //         "positionHeld": "Manager"
  //     },
  //     {
  //         "key": 2,
  //         "name": "John",
  //         "dateOfBirth": new Date(),
  //         "positionHeld": "Manager"
  //     },
  //     {
  //         "key": 3,
  //         "name": "Michael",
  //         "dateOfBirth": new Date(),
  //         "positionHeld": "Manager"
  //     },
  //     {
  //         "key": 4,
  //         "name": "Michael",
  //         "dateOfBirth": new Date(),
  //         "positionHeld": "Manager"
  //     },
  //     {
  //         "key": 5,
  //         "name": "Michael",
  //         "dateOfBirth": new Date(),
  //         "positionHeld": "Manager"
  //     },
  //     {
  //         "key": 6,
  //         "name": "Michael",
  //         "dateOfBirth": new Date(),
  //         "positionHeld": "Manager"
  //     }
  // ];

  deleteFn_Parent(data) {
    console.log("delete key", data);
    this.refreshEmployees();

  }
}
