import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {delay} from 'rxjs/operators'

export interface PlanetsResponse {
  // имя, население в млн.(т.е не 10000000, а 10 млн.) и размер планеты
  count: number
  next: string
  previous: string
  results: []
}

export interface Planet {
  // имя, население в млн.(т.е не 10000000, а 10 млн.) и размер планеты
  name: string
  population: number
  diameter: number,
  buttonName:string,
  isDisabled: boolean
}

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetsResponse> {
    return this.http.get<PlanetsResponse>("https://swapi.dev/api/planets")
    .pipe(delay(500))
    /*.subscribe(response => {
      console.log(response.results)
    })*/
  }
}
