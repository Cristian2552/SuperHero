import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']  // Cambiado de styleUrl a styleUrls
})
export class LayoutComponent {
  informacionRecibida: string = "";

  handleInformacion(event: string) {
    this.informacionRecibida = event;
  }
}
