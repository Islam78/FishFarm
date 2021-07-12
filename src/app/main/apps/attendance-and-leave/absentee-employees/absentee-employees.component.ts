import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-absentee-employees',
  templateUrl: './absentee-employees.component.html',
  styleUrls: ['./absentee-employees.component.scss']
})
export class AbsenteeEmployeesComponent implements OnInit {
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
