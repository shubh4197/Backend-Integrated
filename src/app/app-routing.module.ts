import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { ViewpostsComponent } from './viewposts/viewposts.component';
import { UsersAppliedComponent } from './users-applied/users-applied.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserHomeComponent } from './user-home/user-home.component';

import { UserAppliedPostComponent } from './user-applied-post/user-applied-post.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';



const routes: Routes = [
  {
    path: '', component: LoginComponent

  },
  { path: 'register', component: RegisterComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'addposts', component: AddpostsComponent },
  { path: 'viewposts', component: ViewpostsComponent },
  { path: 'usersApplied/:postid', component: UsersAppliedComponent },
  { path: 'userprofile/:yulu/:bounce', component: UserprofileComponent },
  { path: 'userHome/:userid', component: UserHomeComponent },
  { path: 'adminPayment', component: AdminPaymentComponent },
  {path:'userAppliedPost/:use',component:UserAppliedPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
