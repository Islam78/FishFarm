import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-edit-all-admin',
  templateUrl: './edit-all-admin.component.html',
  styleUrls: ['./edit-all-admin.component.scss']
})
export class EditAllAdminComponent implements OnInit {


  @Input() item: any;
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
        admin_code: this.item.admin_code,
        usercode: this.item.usercode,
        Name: this.item.Name,
        Email: this.item.Email,
        address: this.item.address,
        phone: this.item.phone,
        Farm_name: this.item.Farm_name
      }
    )
  }

  onSubmit(f) {
    console.log("f", f.value);
    this.http.put(`${environment.apiUrl}edit/admins`, f.value).subscribe(res => {
      console.log('admin')
    })
  }
}
