import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetListItemComponent } from './planet-list-item/planet-list-item.component';
import { FormsModule } from '@angular/forms';
import { WantToVisitComponent } from './want-to-visit/want-to-visit.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetListItemComponent,
    WantToVisitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
