import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginV2Component } from './components/login/auth-login-v2.component';
const routes: Routes = [

  {path:'login', component:AuthLoginV2Component},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
