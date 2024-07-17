import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { HeroesYVillanos } from '../../../core/interfaces/heroes-y-villanos';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cardId: number = 0;
  @Output() idEmitter = new EventEmitter<number>();


  filterCards: string = "H";



  heroesVillains: any[] = [];
  dataList: HeroesYVillanos[] = [];
  private id: string = "";
  private powerLevel: string = "";

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.obtenerdata();
    this.idEmitter.emit(this.cardId);
  }

  obtenerdata() {
    const i = this.cardId;
    this.id = i.toString();
    this.apiservice.getData(this.id).subscribe(data => {
      const intelligence = parseInt(data.powerstats.intelligence) || 0;
      const combat = parseInt(data.powerstats.combat) || 0;
      const durability = parseInt(data.powerstats.durability) || 0;
      const power = parseInt(data.powerstats.power) || 0;
      const speed = parseInt(data.powerstats.speed) || 0;
      const strength = parseInt(data.powerstats.strength) || 0;

      const totalPowerstats = intelligence + combat + durability + power + speed + strength;
      this.powerLevel = totalPowerstats.toString();

      let identidad = data.biography['full-name'];
      if (identidad === "-") {
        identidad = "Desconocida";
      }
      if (identidad === "") {
        identidad = "Desconocida";
      }



      let universo = data.biography.publisher;
      if (universo === "") {
        universo = "Desconocido";
      }


      let genero = data.appearance.gender;
      if (genero === "Male") {
        genero = "Masculino";
      }
      if (genero === "Female") {
        genero = "Femenino";
      }
      if (genero === "-") {
        genero = "?";
      }


      let aliniamiento = data.biography.alignment;
      if (aliniamiento === "bad") {
        aliniamiento = "Villano";
      }
      if (aliniamiento === "good") {
        aliniamiento = "Heroe";
      }
      if (aliniamiento === "neutral") {
        aliniamiento = "Neutral";
      }
      if (aliniamiento === "-") {
        aliniamiento = "Neutral";
      }
      this.heroesVillains.push({
        id: parseInt(data.id),
        nombre: data.name,
        identidad: identidad,
        universo: universo,
        genero: genero,
        nivel_de_Poder: this.powerLevel,
        aliniamiento: aliniamiento,
        imgUrl: 'https://loremflickr.com/640/360' || data.image.url
      });


    });
  }
}
