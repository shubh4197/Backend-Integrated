import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidates, HttpserviceService } from '../httpservice.service';
import * as _ from "lodash";
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
     registerform:FormGroup
     submitted=false
     user:Candidates
     name:string
     email:string
     age:string
     selected:string
     skills:string[]
     password:string
     rec1=-1
     personForm: FormGroup;
     selectedHobbies: [string];
     selectedHobbiesNames:string[]
     myhobbies: any = [
       {
         name: "Java",
         value: "Java"
       },
       {
         name: "Python",
         value: "Python",
         selected: true
       },
       {
         name: ".NET",
         value: ".NET",
         selected: true
       },
       {
         name: "Angular",
         value: "Angular"
       },
       {
         name: "React",
         value: "react"
       }
     ];
  constructor(private httpClient:HttpserviceService,private payment: PaymentService,private formBuilder: FormBuilder,public router:Router) {
    
   }

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      selected:''
      }
      , {
        validator: MustMatch('password', 'confirmPassword')
    })
    this.createFormInputs()
  }
  get f() { return this.registerform.controls; }

  getSelectedHobbies() {
    this.selectedHobbies = _.map(this.personForm.controls.hobbies['controls'], (hobby, i) => {
      return hobby.value && this.myhobbies[i].value;
    });
    this.getSelectedHobbiesName();
  }
  
  getSelectedHobbiesName() {
    this.selectedHobbiesNames = _.filter(this.selectedHobbies, function (hobby) {
      if (hobby !== false) {
        return hobby;
      }
    });
  }

  createFormInputs() {
    this.personForm = new FormGroup({
      hobbies: this.createHobbies(this.myhobbies)
    });
  }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerform.invalid) {
        return;
    }
   this.submit()
   
}

submit(){
  
  console.log(this.registerform.value.selected)
  if(this.registerform.value.selected=="DXC")
  {
    this.rec1=1;
    console.log(this.rec1)
  }
  else
  {
    this.rec1=0;
    console.log("ok,again")
  }
  this.getSelectedHobbies();
  this.user=new Candidates(this.name,this.email,this.password,this.selectedHobbiesNames,this.age,this.rec1,0,[],[])
  console.log(this.user)
  this.httpClient.createCandidate(this.user).subscribe(data=>{alert("User Created")
console.log(data)
})
}

register(){
  let username="aa";
  let password="ss";
this.payment.accountCreation(username,password);
}



createHobbies(hobbiesInputs) {
  const arr = hobbiesInputs.map(hobby => {
    return new FormControl(hobby.selected || false);
  });
  return new FormArray(arr);
}

}
