import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { BlogRoutingModule } from './blog-routing.module';

import { BlogEditComponent } from './../components/blogs/blog-edit/blog-edit.component';
import { BlogsComponent } from './../components/blogs/blogs.component';
import { CommonModule } from '@angular/common';
import { MyblogsComponent } from '../components/blogs/myblogs/myblogs.component';
import { BlogListComponent } from '../components/blogs/blog-list/blog-list.component';
import { BlogItemComponent } from '../components/blogs/blog-list/blog-item/blog-item.component';
import { BlogDetailComponent } from '../components/blogs/blog-detail/blog-detail.component';
import { AllblogComponent } from '../components/blogs/allblog/allblog.component';

@NgModule({
    declarations:[
        AllblogComponent,
        BlogsComponent,
        BlogEditComponent,
        MyblogsComponent,
        BlogListComponent,
        BlogItemComponent,
        BlogDetailComponent
    ],
    imports: [
        ReactiveFormsModule,
        BlogRoutingModule,
        CommonModule
    ],
    exports: [AllblogComponent,
        BlogsComponent,
        BlogEditComponent,
        MyblogsComponent,
        BlogListComponent,
        BlogItemComponent,
        BlogDetailComponent, 
        CommonModule]
})
export class BlogModule {}