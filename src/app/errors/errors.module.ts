import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NotFoundComponent, AccessDeniedComponent],
  imports: [CommonModule, SharedModule],
})
export class ErrorsModule {}
