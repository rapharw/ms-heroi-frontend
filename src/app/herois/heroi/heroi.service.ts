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

  atualizaSituacaoHeroi(heroi: Heroi, situacao: string) {
    const obj = this.getAtualizaSituacao(heroi, situacao);
    console.log('atualizaSituacaoHeroi');
    console.log(JSON.stringify(obj));
    return this.http.put<Heroi>(
      `${URL_API}/api/herois/${heroi.id}`,
      JSON.stringify(obj)
    );
  }

  editaHeroi(heroi: Heroi, situacao: string = heroi.situacao) {
    const obj = this.getCadastroEdicao(heroi, situacao, heroi.id);
    console.log('editaHeroi');
    console.log(JSON.stringify(obj));
    return this.http.put<Heroi>(
      `${URL_API}/api/herois/${heroi.id}`,
      JSON.stringify(obj)
    );
  }

  cadastraHeroi(heroi: Heroi) {
    const obj = this.getCadastroEdicao(heroi);
    console.log(obj);
    console.log(JSON.stringify(obj));
    return this.http.post<Heroi>(`${URL_API}/api/herois`, JSON.stringify(obj));
  }

  getCadastroEdicao(
    heroi: Heroi,
    situacao: string = 'ATIVO',
    id: number = null
  ) {
    const obj = {
      id,
      nome: heroi.nome,
      situacao,
      universo: {
        id: Number(heroi.universo),
      },
      poderes: [].map.call(heroi.poderes, (item) => {
        return new Poder(item, null);
      }),
    };
    return obj;
  }

  getAtualizaSituacao(heroi: Heroi, situacao: string) {
    const obj = {
      id: heroi.id,
      nome: heroi.nome,
      situacao,
      universo: heroi.universo,
      poderes: heroi.poderes,
    };
    return obj;
  }
}
