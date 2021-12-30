import { Component, Input, OnInit } from '@angular/core';
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
    size: 0
  }
  //constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    
  }
}
