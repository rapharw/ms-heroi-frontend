import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { TokenService } from '../../core/token/token.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tokenService.removeToken();

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.tokenService.removeToken();

    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(username, password).subscribe(
      (token) => {
        // console.log(token);
        this.tokenService.setToken(token.value);

        this.router.navigate(['herois']);
      },
      (err) => {
        // console.log(err);
        this.loginForm.reset();
      }
    );
  }
}
