import { AddGenrateUserComponent } from './../add-genrate-user/add-genrate-user.component';
import { EditGenrateUserComponent } from './../edit-genrate-user/edit-genrate-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationStart, NavigationError, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-genrate-user',
  templateUrl: './genrate-user.component.html',
  styleUrls: ['./genrate-user.component.scss']
})
export class GenrateUserComponent implements OnInit {
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
    this.Router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.router.params.subscribe(a => this.Type = a.id)
        this.getData()
        console.log('first', this.Type);

      }
      if (event instanceof NavigationEnd) {
        this.router.params.subscribe(a => this.Type = a.id)
        this.getData()
        console.log('end', this.Type);
        return
      }
    });
    this.getData()
  }
  onEdit(item) {
    const modalRef = this.Model.open(EditGenrateUserComponent, {
      size: 'lg'
    })
    modalRef.componentInstance.id = this.Type;
  }
  onAdd() {
    const modalRef = this.Model.open(AddGenrateUserComponent, {
      size: 'lg'
    })
    modalRef.componentInstance.id = this.Type;
  }
  getData() {
    if (this.Type == 1) {
      this.http.get(`${environment.apiUrl}get/admins`).subscribe(
        (res: any) => {
          console.log(res);
          this.dataList = res.result
          this.isLoading = false
        }
      )
      return
    } else {
      this.http.get(`${environment.apiUrl}get/AllUsers`).subscribe(
        (res: any) => {
          this.dataList = res.result
          this.isLoading = false
        }

      )
    }

  }

}
