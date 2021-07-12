import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ReportsComponent } from './reports/reports.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TableModule } from 'primeng/table';
import { KnobModule } from 'primeng/knob';
import { ChartModule } from 'primeng/chart';


const routes: Routes = [
  { path: ':id', component: ReportsComponent }
];

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSkeletonLoaderModule,
    TableModule,
    KnobModule,
    ChartModule,
    NgSelectModule

  ]
})
export class ReportModule { }
