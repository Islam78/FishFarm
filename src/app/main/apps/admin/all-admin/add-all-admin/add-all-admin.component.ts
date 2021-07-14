import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import Swal from 'sweetalert2';
import { SharedService } from '@core/services/shared.service';

@Component({
  selector: 'app-add-all-admin',
  templateUrl: './add-all-admin.component.html',
  styleUrls: ['./add-all-admin.component.scss']
})
export class AddAllAdminComponent implements OnInit {

  constructor(public modal: NgbActiveModal, private router: ActivatedRoute,
    private Router: Router,
    private Fb: FormBuilder,
    public SharedService: SharedService,

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
  close() {
    this.modal.close()
  }
  onSubmit(f) {
    console.log("f", f.value);
    this.http.post(`${environment.apiUrl}admin/signupadmin`, f.value).subscribe(res => {
      this.modal.close()
      Swal.fire({
        title: 'Creted Successful.',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-success'
        }
      });
      this.SharedService.refreshList.next(true)
      f.reset()
    })
  }
}
