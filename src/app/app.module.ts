import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { SingleuserdetailComponent } from './singleuserdetail/singleuserdetail.component';
import { AdduserComponent } from './adduser/adduser.component';
import { VerificationGuard } from './verification.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    LoginpageComponent,
    UserListComponent,
    SingleuserdetailComponent,
    AdduserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [VerificationGuard,
  {
   provide:HTTP_INTERCEPTORS,
   useClass:TokenInterceptorService,
   multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
