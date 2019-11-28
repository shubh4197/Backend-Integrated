import { Component, OnInit } from '@angular/core';
import { Candidates, Posts, HttpserviceService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-applied',
  templateUrl: './users-applied.component.html',
  styleUrls: ['./users-applied.component.css']
})
export class UsersAppliedComponent implements OnInit {
  candidates:Candidates[]
  posts1:Posts
  id:string
  constructor(private httpclient:HttpserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("postid")
    this.httpclient.getPosts1(this.id).subscribe(response=>{
      this.posts1=response;
      console.log(this.posts1)
      this.candidates=this.posts1.appliedCandidates
    })
  }

  profile(candidateid){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["userprofile/"+this.id+"/"+candidateid]);
  });
  }

}
