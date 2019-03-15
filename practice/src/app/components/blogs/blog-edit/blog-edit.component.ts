import { NgForm, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { BlogService } from './../../../services/blog.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  id: number;
  editMode = false;
  blogForm: FormGroup;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }


  onSubmit() {
    if (this.editMode) {
      this.blogService.updateBlog(this.id, this.blogForm.value);
    } else {
      this.blogService.editBlog(this.blogForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let title = '';
    let imagePath = '';
    let content = '';
    let category = '';

    if (this.editMode) {
      const blog = this.blogService.getBlog(this.id);
      title = blog.title;
      imagePath = blog.imagePath;
      content = blog.content;
      category = blog.category;
    }

    this.blogForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'content': new FormControl(content, Validators.required),
      'category': new FormControl(category, Validators.required),
    });
  }
  // onClear() {
  //   this.blogForm.reset();
  //   this.editMode = false;
  // }

// onDelete() {
//   this.blogService.deleteBlog(this.);
//   this.onClear();
// }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  categories = [
    { id: 1, name: "Education" },
    { id: 2, name: "Technology" },
    { id: 3, name: "Sports" }
  ];
  public onChange(event): void {  
    const newVal = event.target.value;
  }

}
