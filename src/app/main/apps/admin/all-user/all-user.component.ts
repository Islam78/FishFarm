import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {

  currentUser
  constructor(
    private _coreMenuService: CoreMenuService,
    private router: ActivatedRoute,
    private Router: Router,
    private http: HttpClient,
    private Model: NgbModal

  ) { }
  isLoading = true
  dataList
  _unsubscribeAll
  Type = 1
  ngOnInit(): void {
    this._unsubscribeAll = new Subject();
    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.currentUser = this._coreMenuService.currentUser;
    })

    this.getData()
  }
  onEdit(item) {
    const modalRef = this.Model.open(EditUserComponent, {
      size: 'lg'
    })
    modalRef.componentInstance.item = item;
  }
  onAdd() {
    this.Model.open(AddUserComponent, {
      size: 'lg'
    })
  }
  onDelete(code) {
    this.http.delete(`${environment.apiUrl}delete/users/${code}`).subscribe(res => {
      console.log('admin')
    })
  }
  getData() {
    this.http.get(`${environment.apiUrl}get/AllUsers`).subscribe(
      (res: any) => {
        this.dataList = res.result
        this.isLoading = false
      }
    )
  }
}
