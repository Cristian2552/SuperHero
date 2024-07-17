import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HeroesYVillanos } from '../interfaces/heroes-y-villanos';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //importamos y asiganos el valor de la url de la api alamacenada en environments
  private api = environment.api;
  //hacemos la injecion de dependecncias 
  constructor(private http: HttpClient) { }

  //creamos el metodo gesData() y le asiganamos observable porque es una api generica
  public getData(id: string): Observable<HeroesYVillanos> {
    //retornamos los datos extraidos de la api con el metdodo get de http
    return this.http.get<HeroesYVillanos>(`${this.api}${id}`);

  }

  public buscar(name:string): Observable<HeroesYVillanos>{
 
    return this.http.get<HeroesYVillanos>(`${this.api}search/${name}`);
  }

  public BuscarAliniamiento(id:string): Observable<HeroesYVillanos>{
 
    return this.http.get<HeroesYVillanos>(`${this.api}${id}/biography`);
  }
}
