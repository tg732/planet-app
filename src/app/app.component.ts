import { Component } from '@angular/core';
import { Planet } from './planets-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  planets: Planet[] = []
  title = 'planet-app';

  updatePlanet(planet: Planet) {
    console.log("Planet: ", planet)
    switch (planet.buttonName) {
      case 'Хочу посетить':
        planet.buttonName = 'В списке'
        //planet.isDisabled = !planet.isDisabled
        this.planets.unshift(planet)
        break;
      case 'В списке':
        planet.buttonName = 'Хочу посетить'
        //planet.isDisabled = !planet.isDisabled
        this.planets = this.planets.filter(function( obj ) {
          return obj.name !== planet.name;
        });
        break;
    }

    
  }
}
