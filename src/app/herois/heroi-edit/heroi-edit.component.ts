import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Heroi } from '../heroi/heroi';
import { HeroiService } from '../heroi/heroi.service';

@Component({
  selector: 'app-heroi-edit',
  templateUrl: './heroi-edit.component.html',
  styleUrls: ['./heroi-edit.component.scss'],
})
export class HeroiEditComponent implements OnInit {
  @Input() heroi: Heroi;
  @Output() edited: EventEmitter<boolean> = new EventEmitter();

  constructor(private heroiService: HeroiService) {}

  ngOnInit(): void {}

  public editaHeroi(heroi: Heroi) {
    this.heroiService.editaHeroi(heroi).subscribe(() => this.edited.emit(true));
  }
}
