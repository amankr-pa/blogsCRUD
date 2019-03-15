import { MyblogsComponent } from './../components/blogs/myblogs/myblogs.component';
import { BlogDetailComponent } from './../components/blogs/blog-detail/blog-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../auth/auth-guard.service';
import { BlogEditComponent } from './../components/blogs/blog-edit/blog-edit.component';
import { BlogsComponent } from './../components/blogs/blogs.component';

const blogRoutes : Routes =[
    {path:'', component: BlogsComponent, children: [
        {path: 'my-blog',component:MyblogsComponent, children: [
            {path: ':id', component: BlogDetailComponent },
            {path: ':id/edit', component: BlogEditComponent }
        ]},
        {path: 'new', component: BlogEditComponent}
          ]}
];
@NgModule({
    imports:[
        RouterModule.forChild(blogRoutes)
    ],
    providers:[AuthGuard],
    exports: [RouterModule]
})

export class BlogRoutingModule {}