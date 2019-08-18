import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { DecoratePipe } from './pipes/decorate.pipe';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DeleteService } from './delete.service';
import { Delete1Service } from './delete1.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { logging } from 'protractor';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ReactLoginComponent } from './components/react-login/react-login.component';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';


const appRoutes = [
  {path:"",component:ReactLoginComponent},
  {
    path: "home", component: HomePageComponent,  canActivate: [AuthGuard], children: [
      { path: "addEmployee", component: AddEmployeeComponent },
      { path: "employeeList", component: EmployeeListComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    CustomdirectiveDirective,
    DecoratePipe,
    EmployeeListComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HomePageComponent,
    LoginComponent,
    ReactLoginComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [

  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },,
    { provide: DeleteService, useClass: Delete1Service }],
  bootstrap: [AppComponent]
})
export class AppModule { }
