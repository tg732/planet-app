import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Planet, PlanetsService } from '../planets-service.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = []
  constructor(private planetsService: PlanetsService) { }
  
  @Output() onSend: EventEmitter<Planet> = new EventEmitter<Planet>()

  ngOnInit(): void {
    this.getPlanets()
  }

  getPlanets() {
    this.planetsService.getPlanets()
    .subscribe(planets => {
      this.planets = planets.results
      console.log(planets.results)
	  this.planets.forEach((p) => { 
	    p.buttonName = 'Хочу посетить'
		p.isDisabled = false 
	  })
    })

    /*this.planets = [
      {
        name: '1',
        population: 1,
        diameter: 1
      }, 
      {
        name: '2',
        population: 2,
        diameter: 2
      }
    ]*/
  }

  sendPlanet($event: any, p: Planet) {
    this.onSend.emit(p)
    //console.log(p)
  }

  sendToVisitPlanet() {
    //this.planets
  }
}

