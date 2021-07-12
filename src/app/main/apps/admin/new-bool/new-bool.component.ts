import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-new-bool',
  templateUrl: './new-bool.component.html',
  styleUrls: ['./new-bool.component.scss']
})
export class NewBoolComponent implements OnInit {

  constructor(private http: HttpClient) { }
  onSubmit(f) {
    console.log("f", f.value);
    this.http.post(`${environment.apiUrl}admin/newfarm`, f.value).subscribe(res => {
      console.log('admin')
    })
  }
  ngOnInit(): void {
    // alert('bool')
  }

}
