import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

// routing
const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'live',
    loadChildren: () => import('./live/live.module').then(m => m.LiveModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then(m => m.ReportModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  // 
  {
    path: 'manage-employee',
    loadChildren: () => import('./manage-employee/manage-employee.module').then(m => m.ManageEmployeeModule)
  },
  {
    path: 'admin-offices',
    loadChildren: () => import('./admin-offices/admin-offices.module').then(m => m.AdminOfficesModule)
  },
  {
    path: 'contracts',
    loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule)
  },
  {
    path: 'attendance-and-leave',
    loadChildren: () => import('./attendance-and-leave/attendance-and-leave.module').then(m => m.AttendanceAndLeaveModule)
  },
  {
    path: 'warnings-and-penalties',
    loadChildren: () => import('./warnings-and-penalties/warnings-and-penalties.module').then(m => m.WarningsAndPenaltiesModule)
  },
  {
    path: 'manage-clint',
    loadChildren: () => import('./manage-clint/manage-clint.module').then(m => m.ManageClintModule)
  },
  {
    path: 'management-contracts',
    loadChildren: () => import('./management-contracts/management-contracts.module').then(m => m.ManagementContractsModule)
  },
];

FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AppsModule { }
