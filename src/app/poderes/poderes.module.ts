import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PoderListComponent } from './poder-list/poder-list.component';
import { PoderEditComponent } from './poder-edit/poder-edit.component';
import { PoderRemoveComponent } from './poder-remove/poder-remove.component';
import { PoderAddComponent } from './poder-add/poder-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PoderListComponent,
    PoderEditComponent,
    PoderRemoveComponent,
    PoderAddComponent,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule],
})
export class PoderesModule {}
