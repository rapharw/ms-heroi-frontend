import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.url.includes('/auth')) {
      if (this.tokenService.hasToken()) {
        const token = this.tokenService.getToken();
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        });
      }
    } else {
      this.tokenService.removeToken();
    }
    return next.handle(req);
  }
}
