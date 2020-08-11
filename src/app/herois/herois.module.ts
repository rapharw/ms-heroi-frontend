import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroiAddComponent } from './heroi-add/heroi-add.component';
import { HeroiEditComponent } from './heroi-edit/heroi-edit.component';
import { HeroiListComponent } from './heroi-list/heroi-list.component';
import { HeroiModalComponent } from './heroi-modal/heroi-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeroiSituacaoComponent } from './heroi-situacao/heroi-situacao.component';

@NgModule({
  declarations: [
    HeroiAddComponent,
    HeroiEditComponent,
    HeroiListComponent,
    HeroiModalComponent,
    HeroiSituacaoComponent,
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
