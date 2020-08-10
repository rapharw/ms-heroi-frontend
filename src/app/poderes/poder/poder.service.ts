import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poder } from './poder';

const jwt =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwic3ViIjoicjAwMDEiLCJhZG1pbiI6ZmFsc2UsImV4cCI6MTU5NzA2MTc5OH0.Z03K0AC9mvbzQPh9Pl_lHZtVHv1u4gVgo82-YZq1Smg';

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
}
