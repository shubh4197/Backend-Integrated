import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Candidates{
  id:string
  constructor(
    
    public name:string,
    public username:string,
    public password:string,
    public skills:string[],
    public age:string,
    public dxc: number,
    public creditsEarned:number,
    public selectedPosts:Posts[],
    public appliedPosts:Posts[]
  ){

  }
}

export class Posts{
  id:string
  constructor(
  public projectname:string,
	public description:string,
  public price:string,
  public skills:string[],
  public credits:string,
  public selectedCandidates:Candidates[],
  public appliedCandidates:Candidates[]){}
  
}

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private httpclient:HttpClient) { }

  createCandidate(employee){
    return this.httpclient.post<Candidates>("http://localhost:5000/candidates",employee)
  }

  getCandidate(){
    return this.httpclient.get<Candidates[]>("http://localhost:5000/candidates")
  }

  createPosts(post){
    return this.httpclient.post<Posts>("http://localhost:5000/posts",post)
  }

  getPosts(){
    return this.httpclient.get<Posts[]>("http://localhost:5000/posts")
  }

  getPosts1(id){
    return this.httpclient.get<Posts>("http://localhost:5000/posts1/"+id)
  }

  applyPosts(postid,candidateid){
    return this.httpclient.put<Posts>("http://localhost:5000/postsApply/"+postid+"/"+candidateid,"")
  }

  acceptPosts(postid,candidateid){
    return this.httpclient.put<Posts>("http://localhost:5000/postsAccept/"+postid+"/"+candidateid,"")
  }

  declinePosts(postid,candidateid){
    return this.httpclient.put<Posts>("http://localhost:5000/postsDecline/"+postid+"/"+candidateid,"")
  }


}
