import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
userList : any = [];

  constructor(private httpService:RequestServiceService, public routes:ActivatedRoute, public routers:Router) { }

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList(){
    this.httpService.getUsers().subscribe((response: any) =>{
      console.log('getUserList', response);
      this.userList = response.data
    },(error) => {
    console.log('getUserList', error);
    });
  }
  
  reDirect(link:string , id:string){
    if(id === ''){
     this.routers.navigate([link]);
    } else{
      this.routers.navigate([link + '/'+ id])
    }

  }

}
