import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import { UserListComponent } from './user-list/user-list.component';
import { SingleuserdetailComponent } from './singleuserdetail/singleuserdetail.component';
import { VerificationGuard } from './verification.guard';
const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent,
    data: { animation: 'signup' }
    
  },
  {
    path:'homepage',
    component:HomepageComponent,
    data: { animation: 'homepage' }
  },
  {
  path:'loginpage',
  component:LoginpageComponent,
  data: { animation: 'login'}
  },
  {
  path:'userlist',
  component:UserListComponent,
  canActivate: [VerificationGuard]
  },
  {
    path:'view/:id',
    component:SingleuserdetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
