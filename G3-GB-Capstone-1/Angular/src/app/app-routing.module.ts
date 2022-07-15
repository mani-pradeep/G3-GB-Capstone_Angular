import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
//import { AdminRegistationComponent } from './admin-registation/admin-registation.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
const routes: Routes = [
  {path:'ALogin',component:AdminLoginComponent},
  {path:'AResister',component:AdminRegistrationComponent},
  {path:'ULogin',component:UserLoginComponent},
  {path:'UResister',component:UserRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
