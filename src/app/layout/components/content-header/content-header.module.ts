import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

import { BreadcrumbModule } from 'app/layout/components/content-header/breadcrumb/breadcrumb.module';
import { ContentHeaderComponent } from 'app/layout/components/content-header/content-header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ContentHeaderComponent],
  imports: [CommonModule, RouterModule, CoreCommonModule, BreadcrumbModule, NgbModule,TranslateModule.forChild()],
  exports: [ContentHeaderComponent]
})
export class ContentHeaderModule {}
