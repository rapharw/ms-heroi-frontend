import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      this.userService.getUserPrincipal().subscribe(
        (user) => {
          if (user.admin === true) {
            return true;
          } else {
            this.router.navigate(['denied']);
            return false;
          }
        },
        () => {
          this.router.navigate(['login']);
          return false;
        }
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
