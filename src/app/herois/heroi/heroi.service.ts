import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroi } from './heroi';
import { Poder } from '../../poderes/poder/poder';

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
    const obj = this.converterHeroi(heroi, heroi.situacao, heroi.id);
    console.log(obj);
    return this.http.put<Heroi>(
      `${URL_API}/api/herois/${heroi.id}`,
      JSON.stringify(obj)
    );
  }

  cadastraHeroi(heroi: Heroi) {
    const obj = this.converterHeroi(heroi);
    console.log(obj);
    return this.http.post<Heroi>(`${URL_API}/api/herois`, JSON.stringify(obj));
  }

  converterHeroi(heroi: Heroi, situacao: string = 'ATIVO', id: number = null) {
    const obj = {
      id,
      nome: heroi.nome,
      situacao,
      universo: {
        id: heroi.universo,
      },
      poderes: [].map.call(heroi.poderes, (item) => {
        return new Poder(item, null);
      }),
    };
    return obj;
  }
}
