import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss']
})
export class WaitingListComponent implements OnInit {
  public contentHeader: object

  constructor() { }
  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'ManageEmployee.waitingList',
      actionButton: false
    };
  }

  editDisplayModal :boolean = false;
  ReviewDialog() {
    this.editDisplayModal =true
    setTimeout( () => {
      this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});
    }, 100);
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
