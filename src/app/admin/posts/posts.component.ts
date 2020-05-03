import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Post } from 'src/app/core/models/post';
import { DatePipe } from '@angular/common';
import { BlogService } from 'src/app/core/services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [DatePipe]
})
export class PostsComponent implements OnInit {
  public Editor = ClassicEditor;
  ckeConfig: any;
  postData: Post;
  formTitle ="Add News"
  postTitle = new FormControl('');
  postDescription = new FormControl('');
  postContent = new FormControl('');
  postForm: FormGroup

  constructor(private _route: ActivatedRoute,
    private datePipe: DatePipe,
    private blogService: BlogService,
    private router: Router) { }

  ngOnInit() {
    this.configurePostForm()
    this.setEditorConfig()
  }
  setEditorConfig() {
    this.ckeConfig = {
      removePlugins: ['ImageUpload', 'MediaEmbed'],
      heading: {
        options: [
          { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
          { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
          { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
          { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
          { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
          { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
          { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
          { model: 'Formatted', view: 'pre', title: 'Formatted' },
        ]
      }
    };
  }
  // save the post
  saveBlogPost() {
    if(this.validatePost()){
      this.blogService.savePosts(this.setPostData())
      this.resetPostData()
    }
  }

  // validate if post firlds are not empty
  validatePost(){
    if(this.postTitle.value.trim()!=="" && this.postDescription.value.trim()!=="" && this.postContent.value.trim()!==""){
      return true
    }
    else 
    return false
  }

  cancel() {
    this.router.navigate(['/adminDashboard']);
  }

  setPostData(): Post {
    var post: Post = new Post("","","","");
    post.title = this.postTitle.value
    post.description = this.postDescription.value
    post.content = this.postContent.value
    post.createdDate = this.datePipe.transform(Date.now(), 'MM-dd-yyyy HH:mm')
    return post
  }

  configurePostForm() {
    this.postForm = new FormGroup({
      'postTitle': this.postTitle,
      'postDiscription': this.postDescription,
      'postContent': this.postContent
    })
  }
  resetPostData() {
    this.postTitle.setValue("");
    this.postDescription.setValue("")
    this.postContent.setValue("")
  }

}
