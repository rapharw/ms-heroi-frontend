import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poder } from './poder';

const jwt =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6Mywic3ViIjoidzAwMDEiLCJhZG1pbiI6dHJ1ZSwiZXhwIjoxNTk3MDk3ODYxfQ.I6YNHvmgssqarInAREsJ9HZCTMqi-zPnoeyX1JnF2yg';

const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`,
  },
};

@Injectable({ providedIn: 'root' })
export class PoderService {
  constructor(private http: HttpClient) {}

  listaPoderes() {
    return this.http.get<Poder[]>(
      'http://localhost:8086/api/poderes',
      httpOptions
    );
  }

  buscaPoder(id: number) {
    return this.http.get<Poder>(
      `http://localhost:8086/api/poderes/${id}`,
      httpOptions
    );
  }

  editaPoder(poder: Poder) {
    return this.http.put<Poder>(
      `http://localhost:8086/admin/poderes/${poder.id}`,
      JSON.stringify(poder),
      httpOptions
    );
  }

  cadastraPoder(poder: Poder) {
    poder.id = null;

    return this.http.post<Poder>(
      `http://localhost:8086/admin/poderes`,
      JSON.stringify(poder),
      httpOptions
    );
  }

  removePoder(id: number) {
    return this.http.delete(
      `http://localhost:8086/admin/poderes/${id}`,
      httpOptions
    );
  }
}
