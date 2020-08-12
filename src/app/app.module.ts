import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoderesModule } from './poderes/poderes.module';
import { ErrorsModule } from './errors/errors.module';
import { UniversosModule } from './universos/universos.module';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { SharedModule } from './shared/shared.module';
import { HeroisModule } from './herois/herois.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxBootstrapModule,
    AppRoutingModule,
    SharedModule,
    PoderesModule,
    UniversosModule,
    HeroisModule,
    ErrorsModule,
    CoreModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
