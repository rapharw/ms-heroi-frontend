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

  @Input() @Output() templateInOut: TemplateRef<any>;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  public openModal(template: TemplateRef<any>) {
    this.templateInOut = template;
    this.modalRef = this.modalService.show(template);
  }
}
