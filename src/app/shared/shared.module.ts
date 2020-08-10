import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloFuncionalidadeComponent } from './titulo-funcionalidade/titulo-funcionalidade.component';
import { EstruturaFuncionalidadeComponent } from './estrutura-funcionalidade/estrutura-funcionalidade.component';
import { NoContentComponent } from './no-content/no-content.component';

const sharedComponents = [
  TituloFuncionalidadeComponent,
  EstruturaFuncionalidadeComponent,
  NoContentComponent,
];

@NgModule({
  declarations: [sharedComponents, NoContentComponent],
  imports: [CommonModule],
  exports: [sharedComponents],
})
export class SharedModule {}
