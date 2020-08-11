import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroi } from '../heroi/heroi';
import { Poder } from 'src/app/poderes/poder/poder';
import { Universo } from '../../universos/universo/universo';
import { PoderService } from 'src/app/poderes/poder/poder.service';
import { UniversoService } from '../../universos/universo/universo.service';

@Component({
  selector: 'app-heroi-modal',
  templateUrl: './heroi-modal.component.html',
  styleUrls: ['./heroi-modal.component.scss'],
})
export class HeroiModalComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() tituloBotao: string = '';
  @Input() isDescricaoDisabled: boolean = false;
  @Input() btnModalColor: string = '';
  @Input() heroi: Heroi;
  heroiAux: Heroi;

  poderes: Poder[];
  universos: Universo[];

  @Output() buttonClicked: EventEmitter<Heroi> = new EventEmitter();

  constructor(
    private poderService: PoderService,
    private universoService: UniversoService
  ) {}

  ngOnInit(): void {
    this.heroiAux = new Heroi(this.heroi.id, this.heroi.nome);
    this.listaPoderes();
    this.listaUniversos();
  }

  listaPoderes() {
    this.poderService
      .listaPoderes()
      .subscribe((poderes) => (this.poderes = poderes));
  }

  listaUniversos() {
    this.universoService
      .listaUniversos()
      .subscribe((universos) => (this.universos = universos));
  }

  public clickButton() {
    this.buttonClicked.emit(this.heroiAux);
  }
}
