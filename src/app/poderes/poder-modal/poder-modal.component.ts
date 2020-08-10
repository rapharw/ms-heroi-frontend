import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poder } from '../poder/poder';

@Component({
  selector: 'app-poder-modal',
  templateUrl: './poder-modal.component.html',
  styleUrls: ['./poder-modal.component.scss'],
})
export class PoderModalComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() tituloBotao: string = '';
  @Input() isDescricaoDisabled: boolean = false;
  @Input() btnModalColor: string = '';
  @Input() poder: Poder;
  poderAux: Poder;

  @Output() buttonClicked: EventEmitter<Poder> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.poderAux = new Poder(this.poder.id, this.poder.descricao);
  }

  public clickButton() {
    this.buttonClicked.emit(this.poderAux);
  }
}
