import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroi } from './heroi';

const jwt =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwic3ViIjoicjAwMDEiLCJhZG1pbiI6ZmFsc2UsImV4cCI6MTU5NzEwNTIzOH0.2F5kU0rh_EFyrVFJJKaeRyyv8G-9wmJZV1CzzJqfEr8';

const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`,
  },
};

@Injectable({ providedIn: 'root' })
export class HeroiService {
  constructor(private http: HttpClient) {}

  listaHerois() {
    return this.http.get<Heroi[]>(
      'http://localhost:8086/api/herois',
      httpOptions
    );
  }

  buscaPoder(id: number) {
    return this.http.get<Heroi>(
      `http://localhost:8086/api/herois/${id}`,
      httpOptions
    );
  }

  editaHeroi(heroi: Heroi) {
    return this.http.put<Heroi>(
      `http://localhost:8086/api/herois/${heroi.id}`,
      JSON.stringify(heroi),
      httpOptions
    );
  }

  cadastraHeroi(heroi: Heroi) {
    heroi.id = null;

    return this.http.post<Heroi>(
      `http://localhost:8086/api/herois`,
      JSON.stringify(heroi),
      httpOptions
    );
  }
}
