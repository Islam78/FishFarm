import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-add-all-admin',
  templateUrl: './add-all-admin.component.html',
  styleUrls: ['./add-all-admin.component.scss']
})
export class AddAllAdminComponent implements OnInit {

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
        admincode: [''],
        name: [''],
        password: [''],
        email: [''],
        phone: ['']
      }
    )
  }
  onSubmit(f) {
    console.log("f", f.value);
    this.http.post(`${environment.apiUrl}admin/signupadmin`, f.value).subscribe(res => {
      console.log('admin')
    })
  }
}
