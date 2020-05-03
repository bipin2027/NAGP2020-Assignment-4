import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[] = [];

  //private jsonDbUrl: string = "http://localhost:3000/posts";
  private jsonDbUrl: string = "https://bipin-covid19db.herokuapp.com/posts";


  constructor(private http: HttpClient) { }

  savePosts(post: Post) {
    var postSaved: boolean = false;
    this.http.post(this.jsonDbUrl, post).subscribe(data => {
      console.log('POST Request is successful ', data);
      postSaved = true;
    },
      error => {
        console.log('Error', error);
        postSaved = false;
      })
  }

  getPosts() {    
    return this.http.get(this.jsonDbUrl);
  }

}
