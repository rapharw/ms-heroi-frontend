import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoderListComponent } from './poderes/poder-list/poder-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { UniversoListComponent } from './universos/universo-list/universo-list.component';
import { HeroiListComponent } from './herois/heroi-list/heroi-list.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'herois', component: HeroiListComponent, canActivate: [AuthGuard] },
  {
    path: 'universos',
    component: UniversoListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'poderes', component: PoderListComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
