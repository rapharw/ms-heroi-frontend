import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss'],
})
export class NoContentComponent implements OnInit {
  @Input() msg: string = '';

  constructor() {}

  ngOnInit(): void {}
}
