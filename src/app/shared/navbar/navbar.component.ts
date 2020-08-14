import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from '../../core/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['login']);
  }
}
