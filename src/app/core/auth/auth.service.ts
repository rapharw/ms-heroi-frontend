import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../user/user';

const API_URL = 'http://localhost:8086';
const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    return this.http.post<string>(
      API_URL + '/auth',
      new User(username, password),
      httpOptions
    );
  }
}
