import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  public contentHeader: object
  constructor() { }

  ngOnInit(): void {}

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
