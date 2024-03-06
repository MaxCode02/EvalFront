import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEvenementComponent } from './evenement/list-evenement/list-evenement.component';
import { AddEvenementComponent } from './evenement/add-evenement/add-evenement.component';

const routes: Routes = [
  { path: 'evenement', component: ListEvenementComponent },
  { path: 'add-evenement', component: AddEvenementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }