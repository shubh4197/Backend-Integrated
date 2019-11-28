import { Component, OnInit } from '@angular/core';
import { Posts, HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})
export class ViewpostsComponent implements OnInit {
  posts:Posts[]
  constructor(private httpclient:HttpserviceService) { }

  ngOnInit() {
    this.httpclient.getPosts().subscribe(response=>{this.posts=response})
  }

}
