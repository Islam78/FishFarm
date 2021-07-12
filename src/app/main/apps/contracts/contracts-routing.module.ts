import { IssuingActionComponent } from './issuing-action/issuing-action.component';
import { ExitRequestComponent } from './exit-request/exit-request.component';
import { TransferRequestProjectsComponent } from './transfer-request-projects/transfer-request-projects.component';
import { TransferRequestDepartmentComponent } from './transfer-request-department/transfer-request-department.component';
import { EndingServicesComponent } from './ending-services/ending-services.component';
import { ResignationRequestsComponent } from './resignation-requests/resignation-requests.component';
import { IssuanceContractsComponent } from './issuance-contracts/issuance-contracts.component';
import { WorkDefinitionComponent } from './work-definition/work-definition.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'issuance-contracts', component: IssuanceContractsComponent },
  { path: 'issuing-action', component: IssuingActionComponent },
  { path: 'work-definition', component: WorkDefinitionComponent },
  { path: 'resignation-requests', component: ResignationRequestsComponent },
  { path: 'ending-services', component: EndingServicesComponent },
  { path: 'transfer-request-department', component: TransferRequestDepartmentComponent },
  { path: 'transfer-request-projects', component: TransferRequestProjectsComponent },
  { path: 'exit-request', component: ExitRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
