import { Component, OnInit } from '@angular/core';
import { Candidates, HttpserviceService } from '../httpservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-applied-post',
  templateUrl: './user-applied-post.component.html',
  styleUrls: ['./user-applied-post.component.css']
})
export class UserAppliedPostComponent implements OnInit {
  id:string
  list:Candidates[]
  candidate:Candidates
  dxc:string
  skills:string=""
  constructor(private httpclient:HttpserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("use")
    this.httpclient.getCandidate().subscribe(response=>{
      this.list=response
      console.log(this.list)
      this.list.forEach(item=>{
        if(this.id==item.id)
        {
          this.candidate=item
        }
      })
      this.candidate.skills.forEach(item=>{
      
        this.skills=this.skills+" "+item+" "
      }) 
     if(this.candidate.dxc==1)
    {
      this.dxc="DXC"
    }
  else{
    this.dxc="Freelancer"
  }})
      
  }

}
