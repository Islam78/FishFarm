import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchComponent } from './search/search.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TableModule,
    MessagesModule,
    DialogModule,
    SidebarModule,
    TranslateModule,
    
  ],
  exports:[
    SearchComponent,
    TableModule,
    ButtonModule,
    MessagesModule,
    DialogModule,
    SidebarModule,
  ]
})
export class SharedModule { }
