import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

const API_URL = 'http://localhost:8086';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserPrincipal() {
    return this.http.get<User>(`${API_URL}/usuario`);
  }
}
