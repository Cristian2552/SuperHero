import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Output() informacion = new EventEmitter<any>();
  private inf: string = "";

  formFilter = new FormGroup({
    'filterCards': new FormControl,  // Valor por defecto
  });
  ngOnInit(): void {
   
  }

 filtrar() {
  let inputValue = this.formFilter.get('filterCards')?.value || '';
  inputValue = inputValue.trimStart(); // Eliminar espacios iniciales
  this.inf = inputValue;
  this.informacion.emit(this.inf); 
  console.log(this.inf);
}

}
