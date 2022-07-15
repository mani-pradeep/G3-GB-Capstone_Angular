import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
//import { AdminRegistationComponent } from './admin-registation/admin-registation.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { RouterModule, Routes } from '@angular/router';

// const appRoutes:Routes=[
// {path:"ALogin",component:AdminLoginComponent},
// {path:"AResister",component:AdminLoginComponent},
// {path:"ULogin",component:AdminLoginComponent},
// {path:"UResister",component:AdminLoginComponent}
// //{path:"",component:HomeComponent},


// ]






@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AdminRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
