import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ], exports:[
    HomeComponent,
    CardsComponent,
   
   

  ]
})
export class BlogModule { }
