import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenrateUserComponent } from '../admin/genrateUser/genrate-user/genrate-user.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EditGenrateUserComponent } from './genrateUser/edit-genrate-user/edit-genrate-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'primeng/api';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NewFarmComponent } from './new-farm/new-farm.component';
import { AddGenrateUserComponent } from './genrateUser/add-genrate-user/add-genrate-user.component';
import { AllUserComponent } from './all-user/all-user.component';
import { AllAdminComponent } from './all-admin/all-admin.component';
import { EditAllAdminComponent } from './all-admin/edit-all-admin/edit-all-admin.component';
import { AddAllAdminComponent } from './all-admin/add-all-admin/add-all-admin.component';
import { AddUserComponent } from './all-user/add-user/add-user.component';
import { EditUserComponent } from './all-user/edit-user/edit-user.component';


@NgModule({
  declarations: [GenrateUserComponent, EditGenrateUserComponent, NewFarmComponent, AddGenrateUserComponent, AllUserComponent, AllAdminComponent, EditAllAdminComponent, AddAllAdminComponent, AddUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    NgApexchartsModule,
    NgbModule,
    SharedModule,
    NgxSkeletonLoaderModule, 
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
