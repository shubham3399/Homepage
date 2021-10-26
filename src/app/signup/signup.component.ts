import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.pattern('[1-9$@_a-zA-Z ]*'),Validators.minLength(8)]),
    mobilenumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    country: new FormControl('India'),
    exampleRadios: new FormControl(''),
    interest : new FormControl('')
  })
  
  
  constructor() { }

  ngOnInit(): void {
  }

 onSubmit(){
   console.log(this.signup.value);
 }
}
