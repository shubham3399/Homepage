import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginpageComponent} from './loginpage/loginpage.component'

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
