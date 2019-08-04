import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { DecoratePipe } from './pipes/decorate.pipe';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DeleteService } from './delete.service';
import { Delete1Service } from './delete1.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    CustomdirectiveDirective,
    DecoratePipe,
    EmployeeListComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[

  ],
  providers: [{provide:DeleteService,useClass:Delete1Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }
