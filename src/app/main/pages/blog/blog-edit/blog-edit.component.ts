import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BlogEditService } from 'app/main/pages/blog/blog-edit/blog-edit.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogEditComponent implements OnInit {
  // Public
  public contentHeader: object;
  public data: any;
  public selectCategories: Observable<any[]>;
  public selectCategoriesSelected = ['Fashion'];

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {BlogEditService} _blogEditService
   */
  constructor(private _blogEditService: BlogEditService) {
    this._unsubscribeAll = new Subject();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Changes
   */
  ngOnInit(): void {
    this._blogEditService.onDataChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
    });

    this.selectCategories = this.data.blogEdit.blogCategories;
    // Content Header
    this.contentHeader = {
      headerTitle: 'Blog Edit',
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
            name: 'Blog',
            isLink: true,
            link: '/'
          },
          {
            name: 'Edit',
            isLink: false
          }
        ]
      }
    };
  }
}
