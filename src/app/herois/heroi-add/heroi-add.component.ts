import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Heroi } from '../heroi/heroi';
import { HeroiService } from '../heroi/heroi.service';

@Component({
  selector: 'app-heroi-add',
  templateUrl: './heroi-add.component.html',
  styleUrls: ['./heroi-add.component.scss'],
})
export class HeroiAddComponent implements OnInit {
  heroi: Heroi = new Heroi();
  @Output() saved: EventEmitter<boolean> = new EventEmitter();

  constructor(private heroiService: HeroiService) {}

  ngOnInit(): void {}

  public cadastraHeroi(heroi: Heroi) {
    console.log('cadastraHeroi');
    console.log(heroi);
    this.heroiService
      .cadastraHeroi(heroi)
      .subscribe(() => this.saved.emit(true));
  }
}
