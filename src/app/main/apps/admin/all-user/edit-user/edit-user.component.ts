import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

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
    console.log(this.item);

    this.form = this.Fb.group(
      {
        usercode: this.item?.User_code,
        Name: this.item?.Name,
        Email: this.item?.Email,
        address: this.item?.address,
        phone: this.item?.phone,
        Farm_name: this.item?.Farm_name
      }
    )
  }

  onSubmit(f) {
    console.log("f", f.value);
    this.http.put(`${environment.apiUrl}edit/users`, f.value).subscribe(res => {
      console.log('admin')
    })
  }
}
