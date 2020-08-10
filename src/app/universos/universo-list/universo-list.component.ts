import { Component, OnInit } from '@angular/core';
import { Universo } from '../universo/universo';
import { UniversoService } from '../universo/universo.service';

@Component({
  selector: 'app-universo-list',
  templateUrl: './universo-list.component.html',
  styleUrls: ['./universo-list.component.scss'],
})
export class UniversoListComponent implements OnInit {
  universos: Universo[] = [];
  universoSelected: Universo;

  constructor(private universoService: UniversoService) {}

  ngOnInit(): void {
    this.listaUniversos();
  }

  listaUniversos() {
    this.universoService
      .listaUniversos()
      .subscribe((universos) => (this.universos = universos));
  }

  selectUniverso(universo: Universo) {
    this.universoSelected = universo;
  }
}
