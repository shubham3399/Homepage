import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../request-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  constructor(private httpService:RequestServiceService, private router:Router) { }
  loginUserData:any = {
   
  };
  ngOnInit(): void {
  }

  verify(){
  this.httpService.userLogin(this.loginUserData).subscribe((Response:any)=>{
    console.log(Response);
    localStorage.setItem('token', Response.token),
    this.router.navigate(['/userlist'])
  },(error: any)=>{
    console.log(error);
  }
  );
}
}
