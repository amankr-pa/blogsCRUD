import { BlogService } from './../../../services/blog.service';
import { Blog } from './../../../models/blog.model';
import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-allblog',
  templateUrl: './allblog.component.html',
  styleUrls: ['./allblog.component.css'],
})
export class AllblogComponent implements OnInit{
blogs: Blog[];

  constructor(private blogService: BlogService) { }
  
  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

}
