import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CompleteEmployeeComponent } from './complete-employee/complete-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';

const routes: Routes = [
  {path:'add', component:AddEmployeeComponent},
  {path:'list', component:EmployeesComponent},
  {path:'waiting-list', component:WaitingListComponent},
  {path:'complete-employee', component:CompleteEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEmployeeRoutingModule { }
