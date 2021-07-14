import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { SharedService } from '@core/services/shared.service';

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
    public SharedService: SharedService,
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
    var Mythis = this
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then(function (result) {
      if (result.value) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'User Delete Cancel :)',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        });
        return;
      }
      Mythis.http.delete(`${environment.apiUrl}delete/users/${code}`).subscribe(res => {
        console.log('admin')
        Mythis.isLoading = true
        Mythis.getData()
      })
    });
  }
  unSubscription: Subscription[] = [];

  ngAfterViewInit(): void {
    const refreshSub = this.SharedService.refreshList.subscribe(res =>{
      if(res){
        // this.list(this.pageSize,this.page)
      }
    })
    this.unSubscription.push(refreshSub)
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
