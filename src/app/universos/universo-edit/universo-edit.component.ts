import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Universo } from '../universo/universo';
import { UniversoService } from '../universo/universo.service';

@Component({
  selector: 'app-universo-edit',
  templateUrl: './universo-edit.component.html',
  styleUrls: ['./universo-edit.component.scss'],
})
export class UniversoEditComponent implements OnInit {
  @Input() universo: Universo;
  @Output() edited: EventEmitter<boolean> = new EventEmitter();

  constructor(private poderService: UniversoService) {}

  ngOnInit(): void {}

  public editaUniverso(universo: Universo) {
    this.poderService
      .editaUniverso(universo)
      .subscribe(() => this.edited.emit(true));
  }
}
