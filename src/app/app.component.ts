import { Component } from '@angular/core';
import { TokenService } from './core/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private tokenService: TokenService, private router: Router) {}

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['login']);
  }
}
