import { AuthService } from './../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
    this.router.navigate(['']);
  }
}
