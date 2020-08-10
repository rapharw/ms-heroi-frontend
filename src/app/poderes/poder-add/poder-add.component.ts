import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poder } from '../poder/poder';
import { PoderService } from '../poder/poder.service';

@Component({
  selector: 'app-poder-add',
  templateUrl: './poder-add.component.html',
  styleUrls: ['./poder-add.component.scss'],
})
export class PoderAddComponent implements OnInit {
  poder: Poder = new Poder();
  @Output() saved: EventEmitter<boolean> = new EventEmitter();

  constructor(private poderService: PoderService) {}

  ngOnInit(): void {}

  public cadastraPoder(poder: Poder) {
    this.poderService
      .cadastraPoder(poder)
      .subscribe(() => this.saved.emit(true));
  }
}
