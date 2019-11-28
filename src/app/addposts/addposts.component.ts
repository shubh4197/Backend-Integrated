import { Component, OnInit } from '@angular/core';
import { Posts, HttpserviceService } from '../httpservice.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import * as _ from "lodash";
@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {
  post:Posts
  projectname:string
  description:string
  price:string
  credits:string
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
  constructor(private httpClient:HttpserviceService) { }

  ngOnInit() {
    this.createFormInputs()
  }
  create(){
    this.getSelectedHobbies()
    this.post=new Posts(this.projectname,this.description,this.price,this.selectedHobbiesNames,this.credits,[],[])
    this.httpClient.createPosts(this.post).subscribe(response=>{alert("Posted Successfully")})
  }
  
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

  createHobbies(hobbiesInputs) {
    const arr = hobbiesInputs.map(hobby => {
      return new FormControl(hobby.selected || false);
    });
    return new FormArray(arr);
  }
}
