import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poder } from './poder';
import { TokenService } from '../../core/token/token.service';

const API_URL = 'http://localhost:8086';

@Injectable({ providedIn: 'root' })
export class PoderService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaPoderes() {
    return this.http.get<Poder[]>(`${API_URL}/api/poderes`);
  }

  buscaPoder(id: number) {
    return this.http.get<Poder>(`${API_URL}/api/poderes/${id}`);
  }

  editaPoder(poder: Poder) {
    return this.http.put<Poder>(
      `${API_URL}/admin/poderes/${poder.id}`,
      JSON.stringify(poder)
    );
  }

  cadastraPoder(poder: Poder) {
    return this.http.post<Poder>(
      `${API_URL}/admin/poderes`,
      JSON.stringify(poder)
    );
  }

  removePoder(id: number) {
    return this.http.delete(`${API_URL}/admin/poderes/${id}`);
  }
}
