import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poder } from '../poder/poder';
import { PoderService } from '../poder/poder.service';

@Component({
  selector: 'app-poder-remove',
  templateUrl: './poder-remove.component.html',
  styleUrls: ['./poder-remove.component.scss'],
})
export class PoderRemoveComponent implements OnInit {
  @Input() poder: Poder;
  @Output() removed: EventEmitter<boolean> = new EventEmitter();

  constructor(private poderService: PoderService) {}

  ngOnInit(): void {}

  public removePoder(poder: Poder) {
    this.poderService
      .removePoder(poder.id)
      .subscribe(() => this.removed.emit(true));
  }
}
