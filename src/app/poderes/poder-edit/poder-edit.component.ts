import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poder } from '../poder/poder';
import { PoderService } from '../poder/poder.service';

@Component({
  selector: 'app-poder-edit',
  templateUrl: './poder-edit.component.html',
  styleUrls: ['./poder-edit.component.scss'],
})
export class PoderEditComponent implements OnInit {
  @Input() poder: Poder;
  @Output() edited: EventEmitter<boolean> = new EventEmitter();

  constructor(private poderService: PoderService) {}

  ngOnInit(): void {}

  public editaPoder(poder: Poder) {
    this.poderService.editaPoder(poder).subscribe(() => this.edited.emit(true));
  }
}
