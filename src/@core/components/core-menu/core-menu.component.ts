import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { CoreMenuService } from '@core/components/core-menu/core-menu.service';

@Component({
  selector: '[core-menu]',
  templateUrl: './core-menu.component.html',
  styleUrls: ['./core-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreMenuComponent implements OnInit {
  currentUser: any;

  @Input()
  layout = 'vertical';

  @Input()
  menu: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   *
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {CoreMenuService} _coreMenuService
   */
  constructor(private _changeDetectorRef: ChangeDetectorRef, private _coreMenuService: CoreMenuService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Set the menu either from the input or from the service
    this.menu = this.menu || this._coreMenuService.getCurrentMenu();
    console.log(this.menu);

    // Subscribe to the current menu changes
    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.currentUser = this._coreMenuService.currentUser;
      if (this.currentUser.usercode) {
        this.menu = this.menu.filter(r => r.hidden == false)
        this.currentUser.Farm_num.map(user => {
          let live: any[] = this.menu[0].children[0].children
          let report: any[] = this.menu[1].children[0].children
          report.push({
            icon: "circle",
            id: user.Farm_name,
            title: user.Farm_name,
            translate: user.Farm_name,
            type: "item",
            url: `report/${user.Farm_name}`,
          })
          live.push({
            icon: "circle",
            id: user.Farm_name,
            title: user.Farm_name,
            translate: user.Farm_name,
            type: "item",
            url: `live/${user.Farm_name}`,
          })

        })
      }
      // Load menu
      this.menu = this._coreMenuService.getCurrentMenu();

      this._changeDetectorRef.markForCheck();
    });
  }
}
