import { FileUploadModule } from 'ng2-file-upload';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { IssuanceContractsComponent } from './issuance-contracts/issuance-contracts.component';
import { IssuingActionComponent } from './issuing-action/issuing-action.component';
import { WorkDefinitionComponent } from './work-definition/work-definition.component';
import { ResignationRequestsComponent } from './resignation-requests/resignation-requests.component';
import { EndingServicesComponent } from './ending-services/ending-services.component';
import { TransferRequestDepartmentComponent } from './transfer-request-department/transfer-request-department.component';
import { TransferRequestProjectsComponent } from './transfer-request-projects/transfer-request-projects.component';
import { ExitRequestComponent } from './exit-request/exit-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    IssuanceContractsComponent, 
    IssuingActionComponent, 
    WorkDefinitionComponent, 
    ResignationRequestsComponent, 
    EndingServicesComponent,
     TransferRequestDepartmentComponent, 
     
     TransferRequestProjectsComponent, 
     ExitRequestComponent
    ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    ContentHeaderModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgbModule,
    
    
  ]
})
export class ContractsModule { }
