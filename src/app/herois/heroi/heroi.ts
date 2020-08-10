import { Universo } from '../../universos/universo/universo';
import { Poder } from '../../poderes/poder/poder';

export class Heroi {
  constructor(
    public id: number = 0,
    public nome: string = '',
    public universo: Universo = new Universo(),
    public dataCadastro: Date = null,
    public situacao: string = '',
    public poderes: Poder[] = []
  ) {}

  addPoder(poder: Poder) {
    this.poderes.push(poder);
  }

  addPoderes(poderes: Poder[]) {
    this.poderes = poderes;
  }
}
