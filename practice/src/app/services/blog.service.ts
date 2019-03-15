import { Injectable } from '@angular/core';

import { Blog } from '../models/blog.model';
import { Subject } from 'rxjs';

@Injectable()
export class BlogService {
    blogsChanged = new Subject<Blog[]>();    

    private blogs: Blog[] = [
        new Blog(
            'Which are the toughest bowling spells in Test cricket?', 
            'Michael Holding bowled 33 overs and took 8 for 92 in the first innings against England at the Oval in 1976',
             'Sports','http://p.imgci.com/db/PICTURES/CMS/285300/285384.4.jpg'),
            new Blog('A second 737 Max crash raises questions about airplane automation' ,
             'As you read this, over a million people are in flight. Close to a third of the commercial airplanes in the sky at any given moment are Boeing 737s: it is the best-selling jetliner in history. The 737 has safely carried over 20 billion passengers on long trips and on short ones. That legacy of safety is now under scrutiny as the 737 Max, the newest variant of the jetliner, has crashed twice in rapid succession.',
             'technology','https://cdn.technologyreview.com/i/images/737.jpg?sw=1180&cx=200&cy=113&cw=1600&ch=900')
    ];

    
  setBlogs(blogs : Blog[]) {
    this.blogs = blogs;
    this.blogsChanged.next(this.blogs.slice());
  }

    getBlogs() {
        return this.blogs;
    }

    getBlog(index: number) {
        return this.blogs[index];
    }
    editBlog(blog: Blog) {
        this.blogs.push(blog);
        this.blogsChanged.next(this.blogs.slice());
      }

    // editBlogs(blogs: Blog[]) {
    //     this.blogs.push(...blogs);
    //     this.blogsChanged.next(this.blogs.slice());
    // }

    updateBlog(index: number, newBlog: Blog) {
        this.blogs[index] = newBlog;
        this.blogsChanged.next(this.blogs.slice());
      }

      deleteBlog(index: number) {
        this.blogs.splice(index, 1);
        this.blogsChanged.next(this.blogs.slice());
      }

}