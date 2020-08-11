import { Component, OnInit, Input } from '@angular/core';
import { Heroi } from '../heroi/heroi';

@Component({
  selector: 'app-heroi-situacao',
  templateUrl: './heroi-situacao.component.html',
  styleUrls: ['./heroi-situacao.component.scss'],
})
export class HeroiSituacaoComponent implements OnInit {
  @Input() heroi: Heroi = new Heroi();

  constructor() {}

  ngOnInit(): void {}
}
