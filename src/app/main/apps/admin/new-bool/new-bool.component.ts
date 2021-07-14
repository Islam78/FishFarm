import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-bool',
  templateUrl: './new-bool.component.html',
  styleUrls: ['./new-bool.component.scss']
})
export class NewBoolComponent implements OnInit {
  constructor(private http: HttpClient) { }
  onSubmit(f) {
    this.http.post(`${environment.apiUrl}admin/newfarm`, f.value).subscribe((res: any) => {
      Swal.fire({
        title: res.record,
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-success'
        }
      });
      f.reset()
    }, err => {
      Swal.fire({
        title: err.error,
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-success'
        }
      });
    })
  }
  ngOnInit(): void {
  }

}
