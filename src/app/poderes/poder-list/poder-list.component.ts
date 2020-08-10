import { Component, OnInit } from '@angular/core';
import { PoderService } from '../poder/poder.service';
import { Poder } from '../poder/poder';

@Component({
  selector: 'app-poder-list',
  templateUrl: './poder-list.component.html',
  styleUrls: ['./poder-list.component.scss'],
})
export class PoderListComponent implements OnInit {
  poderes: Poder[] = [];
  poderSelected: Poder;

  constructor(private poderService: PoderService) {}

  ngOnInit(): void {
    this.listaPoderes();
  }

  listaPoderes() {
    this.poderService
      .listaPoderes()
      .subscribe((poderes) => (this.poderes = poderes));
  }

  selectPoder(poder: Poder) {
    this.poderSelected = poder;
  }
}
