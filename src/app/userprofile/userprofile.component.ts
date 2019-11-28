import { Component, OnInit } from '@angular/core';
import { Candidates, HttpserviceService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  candidate:Candidates
  list:Candidates[]
  id:string
  dxc:string
  skills:string=""
  id1:string
  constructor(private httpclient:HttpserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("bounce")
    this.id1=this.route.snapshot.paramMap.get("yulu")
    this.httpclient.getCandidate().subscribe(response=>{
    this.list=response
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
    else
    {
      this.dxc="Freelancer"
    }
    })
  }

  accept(){
    this.httpclient.acceptPosts(this.id1,this.id).subscribe(response=>{
     alert("accepted")
     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["viewposts"]);
  });
    })
  }

  decline(){
    this.httpclient.declinePosts(this.id1,this.id).subscribe(response=>{
      alert("decline")
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(["viewposts"]);
    });
     })
  }
}
