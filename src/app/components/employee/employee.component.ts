import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeModel } from 'src/app/model/EmployeeModel';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/api/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: EmployeeModel;
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(public httpService: EmployeeService) { }

  ngOnInit() {
  }

  deleteFn(key: number) {
    console.log("in child called", key);
    this.httpService.deleteEmployee(key).subscribe((data) => {
      console.log(data);
    });
    this.deleteEvent.emit("deleted");
  }

}
