import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListEvenementComponent} from 'src/app/evenement/list-evenement/list-evenement.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEvenementComponent } from './evenement/add-evenement/add-evenement.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListEvenementComponent,
    AppComponent,
    AddEvenementComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
