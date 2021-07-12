import { SharedModule } from './../shared/shared.module';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';
import { EmployeeExistRequestComponent } from './employee-exist-request/employee-exist-request.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceAndLeaveRoutingModule } from './attendance-and-leave-routing.module';
import { AbsenteeEmployeesComponent } from './absentee-employees/absentee-employees.component';
import { RunawayEmployeesComponent } from './runaway-employees/runaway-employees.component';
import { EmployeesRefusingWorkComponent } from './employees-refusing-work/employees-refusing-work.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { OfficesWorkComponent } from './offices-work/offices-work.component';


@NgModule({
  declarations: [
    AbsenteeEmployeesComponent,
    AttendanceComponent,
    EmployeeExistRequestComponent,
    RunawayEmployeesComponent, 
    EmployeesRefusingWorkComponent, 
    VacationRequestComponent, OfficesWorkComponent

  ],
  imports: [
    CommonModule,
    AttendanceAndLeaveRoutingModule,
    ContentHeaderModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class AttendanceAndLeaveModule { }
