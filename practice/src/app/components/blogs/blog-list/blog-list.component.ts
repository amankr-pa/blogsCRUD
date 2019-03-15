import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { BlogService } from './../../../services/blog.service';
import { Blog } from './../../../models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {
  blogs: Blog[];
  subscription: Subscription;

  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.blogService.blogsChanged
    .subscribe(
      (blogs: Blog[]) => {
        this.blogs = blogs;
      }
    );
  this.blogs = this.blogService.getBlogs();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
