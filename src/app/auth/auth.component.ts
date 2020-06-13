import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  createUserForm: FormGroup;
  loginForm: FormGroup;
  hide: boolean;
  user;
  logInError;
  signUpError;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      userId: new FormControl(null),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
    this.authService.userId.subscribe((res) => {
      console.log('redirect ID=', res);
      if (res) {
        this.router.navigate([`/home`]);
      }
    });
    this.authService.logInError.subscribe((e) => {
      this.logInError = e;
    });
    this.userService.signUpError.subscribe((e) => {
      this.signUpError = e;
    });
  }
  toggle(cont) {
    cont.classList.toggle('s--signup');
  }
  loginEmail() {
    this.authService.loginEmail(this.loginForm.value);
  }
  login() {
    this.authService.login();
  }
  signUp() {
    this.userService.createUser(this.createUserForm.value);
  }
}
