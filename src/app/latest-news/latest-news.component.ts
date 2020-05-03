import { Component, OnInit } from '@angular/core';
import { BlogService } from '../core/services/blog.service';
import { Post } from '../core/models/post';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
latestNews:Post[]=[];
  constructor(private blogService:BlogService) { }

  ngOnInit() {
    this.getLatestNews();
  }

  getLatestNews(){
    this.blogService.getPosts().subscribe((data:any)=>{
      this.latestNews= data;
    });
  }


}
