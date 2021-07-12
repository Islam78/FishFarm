import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeService } from '@core/services/addEmployee/add-employee.service';
import { SelectionType, ColumnMode } from '@swimlane/ngx-datatable';
import Stepper from 'bs-stepper';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  SearchArr
  SearchHeader
  MakeSearchArr() {
    this.SearchHeader= 'Employees'
    this.SearchArr = [
      { label: "Employee Name", Type: "text" },
      { label: "Job", Type: "text" },
      { label: "Id", Type: "number" }
    ]
  }
  constructor(private _serv: AddEmployeeService, public router: Router) { }
  public contentHeader: object
  editDisplayModal: boolean
  showEditModalDialog() {
    this.editDisplayModal = true;
    setTimeout( () => {
      this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});
    }, 100);
  }
  UpdateEmployeeOffices() {
    this.editDisplayModal = false
  }
  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'common.employees',
      actionButton: false
    };
  }
  horizontalWizardStepper: Stepper;
  horizontalWizardStepperPrevious() {
    this.horizontalWizardStepper.previous();
  }
  horizontalWizardStepperNext(data) {
    this.horizontalWizardStepper.next();
    if (data.form.valid === true) {
      // this.horizontalWizardStepper.next();
    }
  }

}
