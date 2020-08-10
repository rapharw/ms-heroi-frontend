import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UniversoListComponent } from './universo-list/universo-list.component';
import { UniversoEditComponent } from './universo-edit/universo-edit.component';
import { UniversoModalComponent } from './universo-modal/universo-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UniversoListComponent,
    UniversoEditComponent,
    UniversoModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class UniversosModule {}
