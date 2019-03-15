import { Blog } from './../../models/blog.model';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  show = false;
  count = false;

  constructor(protected authService: AuthService, private blogService: BlogService, private router: Router) { }
  ngOnInit() {
  }
  onLoginCall() {
    this.router.navigate(['signin']);
  }

  onLogout() {
      this.authService.logout();
  }

}
