import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloFuncionalidadeComponent } from './titulo-funcionalidade/titulo-funcionalidade.component';
import { EstruturaFuncionalidadeComponent } from './estrutura-funcionalidade/estrutura-funcionalidade.component';
import { NoContentComponent } from './no-content/no-content.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const sharedComponents = [
  TituloFuncionalidadeComponent,
  EstruturaFuncionalidadeComponent,
  NoContentComponent,
  BootstrapModalComponent,
  NavbarComponent,
];

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule, RouterModule],
  exports: [sharedComponents],
})
export class SharedModule {}
