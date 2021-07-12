import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runaway-employees',
  templateUrl: './runaway-employees.component.html',
  styleUrls: ['./runaway-employees.component.scss']
})
export class RunawayEmployeesComponent implements OnInit {  

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
