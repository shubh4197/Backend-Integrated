import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidates, HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aEmail:string;
  usrError=0;
  aPwd:string;
  pwdError=0;
  users:Candidates[]=[]
  username:string
  password:string
  flag:number=0

  registerForm: FormGroup;
    submitted = false;

  
  constructor(private formBuilder: FormBuilder,public router:Router,private httpClient:HttpserviceService) { }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.httpClient.getCandidate().subscribe(response=>{this.users=response})
  }
   
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

   this.login()
   
}
onAdmin(){
  
 if(this.aEmail!='admin')this.usrError=1;
 else this.usrError=0;
 if(this.aPwd!='admin123')this.pwdError=1;
 else this.pwdError=0;
if(this.usrError==1 || this.pwdError==1)return;
this.router.navigate(['adminhome']);
  }


  login(){
  
    this.users.forEach(item=>{
      if(item.username==this.username && item.password==this.password)
      {alert("Login successful")
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['userHome/'+item.id]);
    }); 
     this.flag=1
    }  
      
  
    })
  
    if(this.flag==0)
    {
      alert("Login unsuccessful")
    }
  }
}
