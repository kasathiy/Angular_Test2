import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployeeDTO } from './employee.dto';
import { map } from "rxjs/Operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }

  getEmployees(): Observable<Array<IEmployeeDTO>> {
    return this.http.get("http://localhost:8081/getEmployees").pipe(
      map(response => {
        return response as Array<IEmployeeDTO>;
      })
    );
  }

  deleteEmployee(key): Observable<Array<IEmployeeDTO>> {
    return this.http
      .delete("http://localhost:8081/deleteEmployee", { params: { key } })
      .pipe(
        map(response => {
          return response as Array<IEmployeeDTO>;
        })
      );
  }

  addEmployee(dto: IEmployeeDTO) {
    return this.http.put("http://localhost:8081/addEmployee", dto);
  }


}
