import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEvenementComponent } from './evenement/list-evenement/list-evenement.component';

const routes: Routes = [
  { path: 'evenement', component: ListEvenementComponent },
  { path: '', redirectTo: '/evenement', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }