import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universo } from './universo';

const jwt =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwic3ViIjoicjAwMDEiLCJhZG1pbiI6ZmFsc2UsImV4cCI6MTU5NzEwOTAxOX0.9BRxFCkWZ-JC_qBI3mnVJg0ouG7inpywAq-qBAjoU6M';

const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`,
  },
};

@Injectable({ providedIn: 'root' })
export class UniversoService {
  constructor(private http: HttpClient) {}

  listaUniversos() {
    return this.http.get<Universo[]>(
      'http://localhost:8086/api/universos',
      httpOptions
    );
  }

  editaUniverso(universo: Universo) {
    return this.http.put<Universo>(
      `http://localhost:8086/admin/universos/${universo.id}`,
      JSON.stringify(universo),
      httpOptions
    );
  }
}
