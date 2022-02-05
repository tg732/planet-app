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
    this.planets.unshift(planet)
  }
}
