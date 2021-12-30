import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {delay} from 'rxjs/operators'

export interface Planet {
  // имя, население в млн.(т.е не 10000000, а 10 млн.) и размер планеты
  name: string
  population: number
  size: number
}

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets()/*: Observable<Planet[]>*/ {
    //return this.http.get<Planet[]>("https://swapi.dev/api/planets")
    //.pipe(delay(500))
    /*.subscribe(response => {
      console.log(response)
    })*/
  }
}
