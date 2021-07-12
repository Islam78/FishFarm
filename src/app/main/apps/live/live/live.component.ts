import { SocketserviceService } from './../../../../auth/service/socketservice.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;
  LivePh: number = 0;
  LiveTemp: number = 0;
  Img
  Farm_name
  currentUser
  subscrip: Subscription

  constructor(private ActiveRoute: ActivatedRoute, private http: HttpClient,
    private socketSer: SocketserviceService,
    private _coreMenuService: CoreMenuService,
    private router: Router
  ) {
    this._unsubscribeAll = new Subject();
  }
  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
      }
      if (event instanceof NavigationError) {
        console.error(event.error);
      }
      if (event instanceof NavigationEnd) {
        window.location.reload()
      }
    });
    this.ActiveRoute.params.subscribe(a => {
      this.Farm_name = a.id
    });
    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.currentUser = this._coreMenuService.currentUser;
    })
    this.subscrip = new Subscription
    this.LiveDate()
  }
  LiveDate() {
    this.subscrip.add(this.socketSer.sendMessage(this.currentUser?.usercode, this.Farm_name))
    this.subscrip.add(this.socketSer.getMessages()
      .subscribe((num) => {
        this.LivePh = num.ph
        this.LiveTemp = num.tempc
      }))
    this.subscrip.add(this.socketSer.getImage().subscribe(img => {
      this.Img = img
    }))
  }

  ngOnDestroy() {
    this.subscrip.unsubscribe()
    this.socketSer.dis()

  }

}
