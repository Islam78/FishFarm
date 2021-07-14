import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { ProfileService } from 'app/main/pages/profile/profile.service';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';
import { SocketserviceService } from 'app/auth/service/socketservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  // public
  public contentHeader: object;
  public data: any;
  public toggleMenu = false;
  public Monthly = false;
  public toggleNavbarRef = false;
  public loadMoreRef = false;
  currentUser
  subscrip: Subscription
  SelectedFarmCode
  TimeOfFarmCode
  form: FormGroup;
  // private
  private _unsubscribeAll: Subject<any>;

  constructor(private _pricingService: ProfileService,
    private sanitizer: DomSanitizer,
    private _coreMenuService: CoreMenuService,
    private Fb: FormBuilder,
    private http: HttpClient,
    private socketSer: SocketserviceService,

  ) {
    this._unsubscribeAll = new Subject();
    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.currentUser = this._coreMenuService.currentUser;
    })
    this.subscrip = new Subscription

  }

  UpdateSaveTime() {
    console.log('SelectedFarmCode', this.SelectedFarmCode);
    console.log('TimeOfFarmCode', this.TimeOfFarmCode);
    this.subscrip.add(this.socketSer.timesendMessage(this.currentUser?.usercode, this.SelectedFarmCode, this.TimeOfFarmCode))
    Swal.fire({
      icon: 'success',
      title: 'Updated',
      customClass: {
        confirmButton: 'btn btn-success'
      }
    })
  }
  onSubmit(f: FormGroup) {
    if (this.currentUser.admin_code) {// if admin
      this.http.put(`${environment.apiUrl}edit/admins`, f.value).subscribe((res: any) => {
        localStorage.setItem('currentUser', JSON.stringify(res.result));
        console.log('admin', res)
        Swal.fire({
          icon: 'success',
          title: 'Updated',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      })
    } else if (this.currentUser.usercode) { //if user
      this.http.put(`${environment.apiUrl}edit/users`, f.value).subscribe((res: any) => {
        console.log('res', res)
        localStorage.setItem('currentUser', JSON.stringify(res.result));
        Swal.fire({
          icon: 'success',
          title: 'Updated',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      })
    }
  }
  loadMore() {
    this.loadMoreRef = !this.loadMoreRef;
    setTimeout(() => {
      this.loadMoreRef = !this.loadMoreRef;
    }, 2000);
  }
  FormBuilder() {
    this.form = this.Fb.group(
      {
        admin_code: this.currentUser.admin_code,
        usercode: this.currentUser.usercode,
        Name: this.currentUser.Name,
        Email: this.currentUser.Email,
        address: this.currentUser.address,
        phone: this.currentUser.phone,
        Farm_name: this.currentUser.Farm_name
      }
    )
  }
  ngOnInit(): void {
    this._pricingService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
    });
    this.FormBuilder()
    // content header
    this.contentHeader = {
      headerTitle: 'Profile',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Pages',
            isLink: true,
            link: '/'
          },
          {
            name: 'Profile',
            isLink: false
          }
        ]
      }
    };
  }

}
