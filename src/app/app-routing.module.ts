import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoderListComponent } from './poderes/poder-list/poder-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: 'poderes', component: PoderListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}