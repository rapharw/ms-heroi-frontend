import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginFormComponent, HomeComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
})
export class LoginModule {}
