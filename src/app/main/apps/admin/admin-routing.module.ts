import { AllAdminComponent } from './all-admin/all-admin.component';
import { AllUserComponent } from './all-user/all-user.component';
import { NewBoolComponent } from './new-bool/new-bool.component';
import { NewFarmComponent } from './new-farm/new-farm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenrateUserComponent } from './genrateUser/genrate-user/genrate-user.component';

const routes: Routes = [
  { path: 'all-user', component: AllUserComponent },
  { path: 'all-admin', component: AllAdminComponent },
  { path: 'new-farm', component: NewFarmComponent },
  { path: 'new-bool', component: NewBoolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
