import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-titulo-funcionalidade',
  templateUrl: './titulo-funcionalidade.component.html',
  styleUrls: ['./titulo-funcionalidade.component.scss'],
})
export class TituloFuncionalidadeComponent implements OnInit {
  @Input() titulo: string = '';

  constructor() {}

  ngOnInit(): void {}
}
