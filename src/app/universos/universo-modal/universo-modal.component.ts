import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Universo } from '../universo/universo';

@Component({
  selector: 'app-universo-modal',
  templateUrl: './universo-modal.component.html',
  styleUrls: ['./universo-modal.component.scss'],
})
export class UniversoModalComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() tituloBotao: string = '';
  @Input() isDescricaoDisabled: boolean = false;
  @Input() btnModalColor: string = '';
  @Input() universo: Universo;
  universoAux: Universo;

  @Output() buttonClicked: EventEmitter<Universo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.universoAux = new Universo(this.universo.id, this.universo.descricao);
  }

  public clickButton() {
    this.buttonClicked.emit(this.universoAux);
  }
}
