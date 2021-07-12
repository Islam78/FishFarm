import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEmployeeService } from '@core/services/addEmployee/add-employee.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
const URL = 'https://your-url.com';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployeeComponent implements OnInit {
  // 
  contentHeader: object;
  basicDPdata: NgbDateStruct;
  TDNameVar;
  TDPhoneVar;
  TDNationalityVar;
  TDTypeVar = [{ "name": "male" }, { "name": "female" }];
  TDType;
  TypeselectBasicLoading = true;
  TDAgeVar;
  TDVisaprofessionVar;
  TDActualprofessionVar;
  TDEmployeeTypeVar
  TDSalaryVar
  TDSubsistenceVar
  TDHousingAllowanceVar
  TDRelocationAllowanceVar
  TDTotalSalaryVar
  PassportNumberVar
  T_shirtSizeVar
  PantsSizeVar
  shoeSizeVar
  PhoneTypeVar
  BorderNumberVar
  EntryPortVar
  JobNumberVar
  TDPasswordVar
  TDsubsistence_allowanceVar
  TDvisa_numberVar
  TDcarrier_companyVar
  barcode;
  TDDateOfBirthVar: NgbDateStruct;
  PassportDateVar: NgbDateStruct
  PassportEndDateVar: NgbDateStruct;
  EnterDatekVar: NgbDateStruct;
  TDtravel_dateVar: NgbDateStruct;
  horizontalWizardStepper: Stepper;
  // upload Files
  passportuploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  visauploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  ticketuploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  selfieuploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  Handprintuploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  Gender(event) {
    if (event) {
      this.TDType = event.name
      console.log(this.TDType);
    }
  }
  sub: any;
  id: number = 0
  constructor(private gf: FormBuilder, private _serv: AddEmployeeService, private toastr: ToastrService,
    private route: ActivatedRoute, router: Router
  ) {

    this.sub = this.route.params.subscribe(
      params => {
        this.id = params['id'];
      })
    if (this.id != 0) {
      console.log(` wellcom to : ${this.id}`)
      // this.employeeService.getById(this.id)
    }
  }
  SearchArr
  MakeSearchArr() {
    this.SearchArr = [
      { label: "Name", Type: "text" },
      { label: "Id", Type: "text" }
    ]
  }
  ngOnInit() {
    this._serv.khayalGroups().subscribe(res => { })
    this._serv.khayal_jobs().subscribe((res: any) => {
      this.ActualprofessionArr = res.data
    })
    this.StartUp()
  }
  StartUp() {
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});
    // content header
    this.contentHeader = {
      headerTitle: 'common.addEmployees',
      actionButton: false
    };
  }

  ActualprofessionArr
  Actualprofession(event) {
    console.log(event);
    if (event) {
      this.Actualprofession = event.id
      console.log(this.Actualprofession);
    }
  }

  tForm: FormData = new FormData();
  postImage() {
    console.log('postImage');
    this.tForm.append('test', this.passportuploader.queue[0].file.name)
    this.tForm.append('tesst', "1")
    this.tForm.append('t', this.passportuploader.queue[0].file.rawFile, this.passportuploader.queue[0].file.name)
    console.log([this.passportuploader.queue[0].file.rawFile][0]);
    console.log(this.tForm.getAll("t"));
    let arr = {
      "file1": [[this.passportuploader.queue[0].file.rawFile][0]],
      "age": 22
    }
    this._serv.postImage(arr).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  GForm: FormGroup
  GenrateForm() {
    this.GForm = this.gf.group({
      "group_id": [1],
      "name": this.TDNameVar ? [this.TDNameVar] : "",
      "password": this.TDPasswordVar ? [this.TDPasswordVar] : "",
      "email": this.TDPhoneVar ? [this.TDPhoneVar] : "",
      "age": this.TDAgeVar ? [this.TDAgeVar] : "",
      "nationality": this.TDNationalityVar ? [this.TDNationalityVar] : "",
      "total_salary": this.TDTotalSalaryVar ? [this.TDTotalSalaryVar] : "",
      "basic_salary": this.TDSalaryVar ? [this.TDSalaryVar] : "",
      "transfer_allowance": this.TDRelocationAllowanceVar ? [this.TDRelocationAllowanceVar] : "",
      "housing_allowance": this.TDHousingAllowanceVar ? [this.TDHousingAllowanceVar] : "",
      "subsistence_allowance": this.TDsubsistence_allowanceVar ? [this.TDsubsistence_allowanceVar] : "",
      "board_number": this.BorderNumberVar ? [this.BorderNumberVar] : "",
      "birthdate": this.TDDateOfBirthVar ? `${this.TDDateOfBirthVar?.year}/${this.TDDateOfBirthVar?.month}/${this.TDDateOfBirthVar?.day}` : "",
      "issuance_passport_date": this.PassportDateVar ? `${this.PassportDateVar?.year}/${this.PassportDateVar?.month}/${this.PassportDateVar?.day}` : "",
      "expiration_passport_date": this.PassportEndDateVar ? `${this.PassportEndDateVar?.year}/${this.PassportEndDateVar?.month}/${this.PassportEndDateVar?.day}` : "",
      "travel_date": this.TDtravel_dateVar ? `${this.TDtravel_dateVar?.year}/${this.TDtravel_dateVar?.month}/${this.TDtravel_dateVar?.day}` : "",
      "kingdom_entry_date": this.EnterDatekVar ? `${this.EnterDatekVar?.year}/${this.EnterDatekVar?.month}/${this.EnterDatekVar?.day}` : "",
      "visa_number": this.TDvisa_numberVar ? [this.TDvisa_numberVar] : "",
      "carrier_company": this.TDcarrier_companyVar ? [this.TDcarrier_companyVar] : "",
      "passport_number": this.PassportNumberVar ? [this.PassportNumberVar] : "",
      "actual_job": this.TDActualprofessionVar ? [this.TDActualprofessionVar] : "",
      "visa_job": this.TDVisaprofessionVar ? [this.TDVisaprofessionVar] : "",
      "gender": this.TDTypeVar ? [this.TDTypeVar] : "",
      "mobile_type": this.PhoneTypeVar ? [this.PhoneTypeVar] : "",
      "kingdom_entry_port": this.EntryPortVar ? [this.EntryPortVar] : "",
      "shirt_size": this.T_shirtSizeVar ? [this.T_shirtSizeVar] : "",
      "pants_size": this.PantsSizeVar ? [this.PantsSizeVar] : "",
      "shoe_size": this.shoeSizeVar ? [this.shoeSizeVar] : "",
      "img_path": [this.selfieuploader.queue[0]?.file.name],
      "fingerprint": [this.Handprintuploader.queue[0]?.file.name],
      // "contract_copy": [this.Handprintuploader.queue[0]?.file],
      "passport_copy": [this.passportuploader.queue[0]?.file.name],
      "residence_copy": [this.visauploader.queue[0]?.file.name],//
      // "insurance_copy": [this.visauploader.queue[0]?.file],//
      // "employee_status_copy": [this.selfieuploader.queue[0]?.file],//
      // "direct_work_copy": [this.visauploader.queue[0]?.file],//
      // "visa_copy": [this.visauploader.queue[0]?.file],
      "ticket_copy": [this.ticketuploader.queue[0]?.file.name]
      // ***********************
      // "blood_type": [this.TDNameVar],//
      // "employee_status": [this.TDNameVar],//
      // "direct_action_date": [this.PassportDateVar],//
      // "end_action_date": [this.PassportDateVar], //
      // "end_insurance_date": [this.PassportDateVar],//
      // "end_residence_date": [this.PassportDateVar],//
      // "job_number": [this.JobNumberVar],
      // "residence_number": [this.PassportNumberVar],//
      // "insurance_number": [this.PassportNumberVar], //
      // "mobility_number": [this.PassportNumberVar], //
      // "sick_absence_number": [this.PassportNumberVar], //
      // "unexcusedabsences_number": [this.PassportNumberVar],//
    })
  }
  horizontalWizardStepperNext(data) {
    if (data.form.valid === true) {
      this.horizontalWizardStepper.next();
    }
  }

  horizontalWizardStepperPrevious() {
    this.horizontalWizardStepper.previous();
  }
  getId() {
    this.horizontalWizardStepper.next();
    // this.GenrateForm();
    this._serv.addEmployee(this.GForm.value).subscribe((res: any) => {
      this.JobNumberVar = res?.data.job_number
      this.barcode = res?.data.job_number
      if (res.status == true) {
        // alert('ok')
        // this.horizontalWizardStepper.next();
      }
      else {
        // alert('err')
      }
    })
  }
  onSubmit() {
    this.GenrateForm()
    this._serv.addEmployee(this.GForm.value).subscribe()
  }
}
