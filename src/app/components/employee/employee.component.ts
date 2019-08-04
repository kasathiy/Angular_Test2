import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { EmployeeModel } from 'src/app/model/EmployeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee:EmployeeModel;
  @Output() deleteEvent:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  deleteFn(key:number){
    console.log("in child called",key);
    this.deleteEvent.emit(key);
  }

}
