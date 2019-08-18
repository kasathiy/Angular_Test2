import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
     console.log("ngModel instance",form);

     console.log("username",form.value.username);
     console.log("password",form.value.password);
  }

}
