import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private router: Router, private _http: HttpClient) { }

  addEmployee(body) {
    return this._http.post(`${environment.apiUrl}/khayal_post_employee`, body, {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc",
        'Content-Type': 'multipart/form-data'
      }
    })
  }
  allEmployees() {
    return this._http.post(`${environment.apiUrl}/khayal_employees`, '', {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc"
      }
    })
  }
  khayalGroups() {
    return this._http.post(`${environment.apiUrl}/khayal_groups`, '', {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc"
      }
    })
  }
  
  khayal_jobs() {
    return this._http.post(`${environment.apiUrl}/khayal_jobs`, '', {
      headers: {
        khayal1Token: "khayal123",
        token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc"
      }
    })
  }
  

  postImage(body){
    return this._http.post(`${environment.apiUrl}/khayal_file`, body, {
      headers: {
        // khayal1Token: "khayal123",
        // token: "c77b6074ba91f7a77e03dd46e9eea9bad26da99ffc5da4a39c9be84a86525fcc",
        'Content-Type': 'multipart/form-data; ',
        'enctype': 'multipart/form-data' 
      }
    })
  }
}
