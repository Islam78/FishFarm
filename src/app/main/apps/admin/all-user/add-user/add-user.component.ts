import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(public modal: NgbActiveModal, private router: ActivatedRoute,
    private Router: Router,
    private Fb: FormBuilder,
    private http: HttpClient) {
  }
  ngOnInit() {
    this.FormBuilder()
  }
  form: FormGroup;
  FormBuilder() {

    this.form = this.Fb.group(
      {
        usercode: [''],
        name: [''],
        password: [''],
        email: [''],
        phone: [''],
        address: [''],
        save_time: ['']
      }
    )
  }

  onSubmit(f) {
    console.log("f", f.value);
    this.http.post(`${environment.apiUrl}admin/signupuser`, f.value).subscribe(res => {
      console.log('admin')
    })
  }

}
