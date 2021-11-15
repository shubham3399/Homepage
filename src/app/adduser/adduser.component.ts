import { Component, OnInit,Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  
  constructor() { 
   
  }

  ngOnInit(): void {
  }

@Input() selectedUser:any;
@Output() updateUserList = new EventEmitter<any>();

public data: any = {}
ngOnChanges(changes: SimpleChanges) {
  console.log('OnChanges',changes);
  console.log(JSON.stringify(changes));

  // tslint:disable-next-line:forin
  for (let propName in changes) {
       let change = changes[propName];
       this.data[propName] = change.currentValue
  }

  console.log('my data', this.data)
}

update(fname:any,lname:any,emailname:any){
  this.selectedUser.first_name=fname.value;
  this.selectedUser.last_name=lname.value;
  this.selectedUser.email=emailname.value;
}
}
 

  
  










