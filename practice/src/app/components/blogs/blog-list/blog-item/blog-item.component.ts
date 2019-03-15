import { Blog } from './../../../../models/blog.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() blog: Blog;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
