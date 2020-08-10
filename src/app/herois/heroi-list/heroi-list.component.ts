import { Component, OnInit } from '@angular/core';
import { Heroi } from '../heroi/heroi';
import { HeroiService } from '../heroi/heroi.service';

@Component({
  selector: 'app-heroi-list',
  templateUrl: './heroi-list.component.html',
  styleUrls: ['./heroi-list.component.scss'],
})
export class HeroiListComponent implements OnInit {
  herois: Heroi[] = [];
  heroiSelected: Heroi;

  constructor(private heroiService: HeroiService) {}

  ngOnInit(): void {
    this.listaHerois();
  }

  listaHerois() {
    this.heroiService
      .listaHerois()
      .subscribe((herois) => (this.herois = herois));
  }

  selectHeroi(heroi: Heroi) {
    this.heroiSelected = heroi;
  }
}
