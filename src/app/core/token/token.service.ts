import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

const KEY = 'token';
const API_URL = 'http://localhost:8086';
const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem(KEY),
  },
};

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor(private http: HttpClient) {}

  validateToken() {
    return this.http.get<string>(`${API_URL}/token`, httpOptions);
  }

  hasToken() {
    return !!this.getToken();
  }

  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
