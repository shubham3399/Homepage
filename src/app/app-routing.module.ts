import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import { UserListComponent } from './user-list/user-list.component';
import { SingleuserdetailComponent } from './singleuserdetail/singleuserdetail.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
  path:'loginpage',
  component:LoginpageComponent
  },
  {
  path:'userlist',
  component:UserListComponent
  },
  {
    path:'view/:id',
    component:SingleuserdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
