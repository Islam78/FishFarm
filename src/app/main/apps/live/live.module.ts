import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live/live.component';
import { KnobModule } from 'primeng/knob';


@NgModule({
  declarations: [LiveComponent],
  imports: [
    CommonModule,
    LiveRoutingModule,
    KnobModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class LiveModule { }
