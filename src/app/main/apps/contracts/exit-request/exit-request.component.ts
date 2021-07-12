import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit-request',
  templateUrl: './exit-request.component.html',
  styleUrls: ['./exit-request.component.scss']
})
export class ExitRequestComponent implements OnInit {


  editDisplayModal: boolean
  NewDisplayModal: boolean
  constructor() { }

  showEditModalDialog() {
    this.editDisplayModal = true;
  }
  UpdateEmployeeOffices() {
    this.editDisplayModal = false
  }
  ngOnInit(): void {}

}
