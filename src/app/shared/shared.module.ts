
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    NavbarComponent,
    
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
NavbarComponent,




  ]
})
export class SharedModule { }
