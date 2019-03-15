// import { AdminGuard } from './auth/admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegisterComponent } from './components/signin/register.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'register', component: AdminComponent,canActivate: [AuthGuard]},
    {path:'signup', component: SignupComponent },
    {path:'signin' , component: RegisterComponent},
    {path: 'blogs', component: BlogsComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
