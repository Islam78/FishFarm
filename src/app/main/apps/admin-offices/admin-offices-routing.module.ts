import { OfficesWorkComponent } from './../attendance-and-leave/offices-work/offices-work.component';
import { ArchiveComponent } from './archive/archive.component';
import { OurOfficeEmployeesComponent } from './our-office-employees/our-office-employees.component';
import { RecommendEmployeeComponent } from './recommend-employee/recommend-employee.component';
import { AdminGroupsComponent } from './admin-groups/admin-groups.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOfficWorkComponent } from './new-offic-work/new-offic-work.component';

const routes: Routes = [
  {path:'new-office-work-list', component:OfficesWorkComponent},
  {path:'admin-groups', component: AdminGroupsComponent},
  {path:'recommend-employee', component: RecommendEmployeeComponent},
  {path:'our-office-employees', component: OurOfficeEmployeesComponent},
  {path:'Archive', component: ArchiveComponent},
  // office-Archive

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOfficesRoutingModule { }
