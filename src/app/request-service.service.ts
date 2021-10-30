import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http:HttpClient) { }
  private url = "https://reqres.in/api/";

  getUsers(){
    return this.http.get(this.url + "users?page=2");
  }
  createUser(data:any){
    return this.http.post(this.url + "users",data);
  }
  getData(id:string){
    return this.http.get(this.url + "users/" + id );
  }
}
