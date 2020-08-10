import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-estrutura-funcionalidade',
  templateUrl: './estrutura-funcionalidade.component.html',
  styleUrls: ['./estrutura-funcionalidade.component.scss'],
})
export class EstruturaFuncionalidadeComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  constructor() {}

  ngOnInit(): void {}
}
