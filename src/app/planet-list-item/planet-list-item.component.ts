import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Planet, PlanetsService } from '../planets-service.service';

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.scss']
})
export class PlanetListItemComponent implements OnInit {
  //planets: Planet[] = []
  @Input() planet: Planet = {
    name: '',
    population: 0,
    diameter: 0,
    buttonName: '333'
  }

  @Output() onAdd: EventEmitter<Planet> = new EventEmitter<Planet>()
  //constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    
  }

  sendPlanet() {
    this.onAdd.emit(this.planet)
  }
  
}
