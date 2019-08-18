import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-react-login',
  templateUrl: './react-login.component.html',
  styleUrls: ['./react-login.component.css']
})
export class ReactLoginComponent implements OnInit {

  loginForm:FormGroup;
  error:string;
  constructor(public authenticationService:AuthenticationService, public router:Router) { }

  ngOnInit() {
     this.loginForm = new FormGroup(
        {
          username:new FormControl(null,Validators.required),
          password:new FormControl(null,[Validators.required,Validators.minLength(4)])
        }
     );

  }

  onSubmit(){
    console.log("formGroup",this.loginForm);
    console.log("formGroup username",this.loginForm.value.username);
    console.log("formGroup password",this.loginForm.value.password);

    this.authenticationService.login(this.loginForm.value.username,this.loginForm.value.password)
    .subscribe(
      data => {
        this.router.navigate(["home", "employeeList"]);
      },
      error => {
        console.log("error",error);
        this.error = error.error.message;
        // this.loading = false;
      }
    );
 
    


  }

}
