import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-exist-request',
  templateUrl: './employee-exist-request.component.html',
  styleUrls: ['./employee-exist-request.component.scss']
})
export class EmployeeExistRequestComponent implements OnInit {


  editDisplayModal: boolean
  constructor() { }

  showEditModalDialog() {
    this.editDisplayModal = true;
  }
  UpdateEmployeeOffices() {
    this.editDisplayModal = false
  }
  ngOnInit(): void {}


}
