import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroi } from './heroi';

const URL_API = 'http://localhost:8086';

@Injectable({ providedIn: 'root' })
export class HeroiService {
  constructor(private http: HttpClient) {}

  listaHerois() {
    return this.http.get<Heroi[]>(`${URL_API}/api/herois`);
  }

  buscaPoder(id: number) {
    return this.http.get<Heroi>(`${URL_API}/api/herois/${id}`);
  }

  editaHeroi(heroi: Heroi) {
    return this.http.put<Heroi>(
      `${URL_API}/api/herois/${heroi.id}`,
      JSON.stringify(heroi)
    );
  }

  cadastraHeroi(heroi: Heroi) {
    heroi.id = null;
    heroi.situacao = 'ATIVO';

    return this.http.post<Heroi>(
      `${URL_API}/api/herois`,
      JSON.stringify(heroi)
    );
  }
}
