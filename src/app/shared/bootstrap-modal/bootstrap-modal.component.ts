import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-shared-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss'],
})
export class BootstrapModalComponent implements OnInit {
  public modalRef: BsModalRef;
  @Input() titulo: string = '';
  @Input() tituloBotao: string = '';
  @Input() btnModalColor: string = '';

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public clickButton() {
    this.modalRef.hide();
    this.buttonClicked.emit();
  }
}
