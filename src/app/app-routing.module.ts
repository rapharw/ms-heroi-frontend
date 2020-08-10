import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoderListComponent } from './poderes/poder-list/poder-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { UniversoListComponent } from './universos/universo-list/universo-list.component';
import { HeroiListComponent } from './herois/heroi-list/heroi-list.component';

const routes: Routes = [
  { path: 'herois', component: HeroiListComponent },
  { path: 'universos', component: UniversoListComponent },
  { path: 'poderes', component: PoderListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
