import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroiAddComponent } from './heroi-add/heroi-add.component';
import { HeroiEditComponent } from './heroi-edit/heroi-edit.component';
import { HeroiListComponent } from './heroi-list/heroi-list.component';
import { HeroiRemoveComponent } from './heroi-remove/heroi-remove.component';
import { HeroiModalComponent } from './heroi-modal/heroi-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroiAddComponent,
    HeroiEditComponent,
    HeroiListComponent,
    HeroiRemoveComponent,
    HeroiModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HeroisModule {}
