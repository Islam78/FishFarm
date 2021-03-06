import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginV2Component } from './components/login/auth-login-v2.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AuthLoginV2Component, AuthLoginV2Component],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgSelectModule
  ]
})
export class AuthModule { }
