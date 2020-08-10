import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroi } from '../heroi/heroi';

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

  @Output() buttonClicked: EventEmitter<Heroi> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.heroiAux = new Heroi(this.heroi.id, this.heroi.nome);
  }

  public clickButton() {
    this.buttonClicked.emit(this.heroiAux);
  }
}
