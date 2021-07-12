import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEmployeeRoutingModule } from './manage-employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FileUploadModule } from 'ng2-file-upload';
import { EmployeesComponent } from './employees/employees.component';
import { SharedModule } from '../shared/shared.module';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { CompleteEmployeeComponent } from './complete-employee/complete-employee.component';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeesComponent,
    WaitingListComponent,
    CompleteEmployeeComponent,
  ],
  imports: [
    CommonModule,
    ManageEmployeeRoutingModule,
    ContentHeaderModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgbModule,
    FileUploadModule,
    SharedModule
  ]
})
export class ManageEmployeeModule { }
