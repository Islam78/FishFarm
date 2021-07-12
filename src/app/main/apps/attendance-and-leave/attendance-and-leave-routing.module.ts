import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenteeEmployeesComponent } from './absentee-employees/absentee-employees.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeeExistRequestComponent } from './employee-exist-request/employee-exist-request.component';
import { EmployeesRefusingWorkComponent } from './employees-refusing-work/employees-refusing-work.component';
import { RunawayEmployeesComponent } from './runaway-employees/runaway-employees.component';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';

const routes: Routes = [
  {
    path: 'attendance',
    component: AttendanceComponent
  },
  {
    path: 'vacation-request',
    component: VacationRequestComponent
  },
  {
    path: 'employee-exist-request',
    component: EmployeeExistRequestComponent
  },
  {
    path: 'absent-employees',
    component: AbsenteeEmployeesComponent
  },
  {
    path: 'runAway-employees',
    component: RunawayEmployeesComponent
  },
  {
    path: 'employees-refusing-work',
    component: EmployeesRefusingWorkComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceAndLeaveRoutingModule { }
