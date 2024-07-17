import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { HeroesYVillanos } from '../../../core/interfaces/heroes-y-villanos';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() id = new EventEmitter<number>();
  @Input() infRecibida: string = ''; 
  public page: number = 1;
  filterCards: string = "";
  envia_id: string[] = [];

  cards: number[] = [];
  cardsFilter: number[] = [];
  cardsFilter2: number[] = [];
  infFiltro: string = "";
  visible = true;
  isLoading: boolean = false; // Estado para mostrar la pantalla de carga

  constructor(private apiService: ApiService) {}


  recargarPagina() {
    setTimeout(() => {
      this.isLoading = true;
      setTimeout(() => {
      location.reload(); ;});1000 
      ;});5000  
   
  }



  formPage = new FormGroup({
    'pagina': new FormControl('', [Validators.required, Validators.min(1), Validators.max(37)])
  });

  ngOnInit(): void {
    this.cards = Array.from({ length: 731 }, (_, i) => i + 1);
    this.cardsFilter = [...this.cards];
  }

  emitId(i: number): void {
    this.id.emit(i);
  }

  filtro(option: string) {
    this.isLoading = true; // Activar la pantalla de carga
    if (option === 'Todos') {
      this.infFiltro = "";
      location.reload();
      this.filtrar_H_V(this.infFiltro);
    } else if (option === 'Heroes') {
      this.infFiltro = "good";
      this.filtrar_H_V(this.infFiltro);
    } else if (option === 'Villanos') {
      this.infFiltro = "bad";
      this.filtrar_H_V(this.infFiltro);
    } else if (option === 'Neutrales') {
      this.infFiltro = "neutral";
      this.filtrar_H_V(this.infFiltro);
    }
  }

  filtrar_H_V(infFiltro: string) {
    this.isLoading = true; // Activar la pantalla de carga

    const requests = this.cardsFilter.map(cardId => 
      this.apiService.getData(cardId.toString())
    );

    forkJoin(requests).subscribe(results => {
      this.cardsFilter2 = results
        .filter((data: HeroesYVillanos) => {
          if (infFiltro === '') return true; // Si no hay filtro, incluir todos
          return data.biography.alignment === infFiltro;
        })
        .map((data: HeroesYVillanos) => parseInt(data.id, 10));
        setTimeout(() => {
      this.isLoading = false;});5000 // Desactivar la pantalla de carga
    }, error => {
      console.error('Error fetching data', error);
      setTimeout(() => {
        this.isLoading = false;});5000  // Desactivar la pantalla de carga en caso de error
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.infFiltro = ""; //reinicia el filtro para buscar entre todos los personajes...
    if (this.infRecibida) {
      this.isLoading = true; // Activar la pantalla de carga
      this.apiService.buscar(this.infRecibida).subscribe((data: any) => {
        this.cardsFilter = [];
        this.cardsFilter2 = [];

        if (data.results && Array.isArray(data.results)) {
          data.results.forEach((item: any) => {
            if (item.id) {
              this.cardsFilter.push(parseInt(item.id, 10));
            }
          });
        } else {
          console.error('No se encontraron resultados válidos en la respuesta:', data);
        }
        setTimeout(() => {
          this.isLoading = false;});5000  // Desactivar la pantalla de carga
      }, error => {
        console.error('Error fetching data', error);
        setTimeout(() => {
          this.isLoading = false;});5000  // Desactivar la pantalla de carga en caso de error
      });
    }
  }

  ir() {
    this.isLoading = true; // Activar la pantalla de carga
    const paginaValor = this.formPage.value.pagina;
    if (paginaValor) {
      const paginaComoNumero = parseInt(paginaValor, 10);
      this.page = isNaN(paginaComoNumero) ? 1 : paginaComoNumero;
    } else {
      this.page = 1;
    }
    setTimeout(() => {
      this.isLoading = false;});5000  // Desactivar la pantalla de carga
  }
}
