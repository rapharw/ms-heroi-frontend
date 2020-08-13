import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroi } from '../heroi/heroi';
import { HeroiService } from '../heroi/heroi.service';

@Component({
  selector: 'app-heroi-situacao',
  templateUrl: './heroi-situacao.component.html',
  styleUrls: ['./heroi-situacao.component.scss'],
})
export class HeroiSituacaoComponent implements OnInit {
  @Input() heroi: Heroi = new Heroi();
  @Output() situacaoAtualizada: EventEmitter<any> = new EventEmitter();

  constructor(private heroiService: HeroiService) {}

  ngOnInit(): void {}

  atualizaSituacao(situacao: string) {
    console.log('atualizaSituacao');
    console.log(situacao);
    console.log(this.heroi);
    this.heroiService
      .atualizaSituacaoHeroi(this.heroi, situacao)
      .subscribe(() => this.situacaoAtualizada.emit());
  }
}
