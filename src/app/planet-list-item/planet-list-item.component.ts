import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Planet, PlanetsService } from '../planets-service.service';

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.scss']
})
export class PlanetListItemComponent implements OnInit {
  //planets: Planet[] = []
  /*@Input() planet: Planet = {
    name: '',
    population: 0,
    diameter: 0,
    buttonName: '',
    class: 'btn btn-outline-dark col-5'
  }*/

  //@Output() onSend: EventEmitter<Planet> = new EventEmitter<Planet>()
  //constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    
  }

  /*sendPlanet($event: any) {
    this.onSend.emit(this.planet)
    console.log(this.planet)
  }*/
  
}
