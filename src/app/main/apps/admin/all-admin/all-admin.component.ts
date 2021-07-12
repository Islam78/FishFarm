import { AddAllAdminComponent } from './add-all-admin/add-all-admin.component';
import { EditAllAdminComponent } from './edit-all-admin/edit-all-admin.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-all-admin',
  templateUrl: './all-admin.component.html',
  styleUrls: ['./all-admin.component.scss']
})
export class AllAdminComponent implements OnInit {

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
  ngOnInit(): void {
    this._unsubscribeAll = new Subject();
    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.currentUser = this._coreMenuService.currentUser;
    })
    this.getData()
  }
  onEdit(item) {
    const modalRef = this.Model.open(EditAllAdminComponent, {
      size: 'lg'
    })
    modalRef.componentInstance.item = item;
  }
  onAdd() {
    this.Model.open(AddAllAdminComponent, {
      size: 'lg'
    })
  }
  onDelete(code) {
    this.http.delete(`${environment.apiUrl}delete/admins/${code}`).subscribe(res => {
      console.log('admin')
    })
  }
  getData() {
    this.http.get(`${environment.apiUrl}get/admins`).subscribe(
      (res: any) => {
        this.dataList = res.result
        this.isLoading = false
      }
    )
  }

}
