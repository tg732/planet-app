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
    switch (planet.buttonName) {
      case 'Хочу посетить':
        planet.buttonName = 'В списке'
        planet.class="btn btn-outline-secondary col-5"
        // добавляем планету для посещения
        this.planets.unshift(planet)
        break;
      case 'В списке':
        planet.buttonName = 'Хочу посетить'
        planet.class="btn btn-outline-dark col-5"
        // удаляем планету из списка для посещения
        this.planets = this.planets.filter(function( obj ) {
          return obj.name !== planet.name;
        });
        break;
    }

    
  }
}
