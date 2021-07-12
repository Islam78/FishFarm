import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-refusing-work',
  templateUrl: './employees-refusing-work.component.html',
  styleUrls: ['./employees-refusing-work.component.scss']
})
export class EmployeesRefusingWorkComponent implements OnInit {


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
