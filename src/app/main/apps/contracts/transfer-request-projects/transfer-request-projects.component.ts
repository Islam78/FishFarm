import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-request-projects',
  templateUrl: './transfer-request-projects.component.html',
  styleUrls: ['./transfer-request-projects.component.scss']
})
export class TransferRequestProjectsComponent implements OnInit {

  editDisplayModal: boolean
  NewDisplayModal :boolean
  ngOnInit(): void {}

  showEditModalDialog() {
    this.editDisplayModal = true;
  }
  UpdateEmployeeOffices() {
    this.editDisplayModal = false
  }

}
