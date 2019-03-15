// import { AdminGuard } from './auth/admin.guard';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogModule } from './modules/blog.module';
import { BlogService } from './services/blog.service';
import { AuthService } from 'src/app/auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/signin/register.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BlogModule
  ],
  providers: [AuthService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
