import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      this.tokenService.hasToken() &&
      this.tokenService.validateToken().subscribe(
        () => true,
        () => {
          this.tokenService.removeToken();
          this.router.navigate(['login']);
          return false;
        }
      )
    ) {
      return true;
    } else {
      this.tokenService.removeToken();
      this.router.navigate(['login']);
      return false;
    }
  }
}
