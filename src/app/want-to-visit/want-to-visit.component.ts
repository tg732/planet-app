import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../planets-service.service';

@Component({
  selector: 'app-want-to-visit',
  templateUrl: './want-to-visit.component.html',
  styleUrls: ['./want-to-visit.component.scss']
})
export class WantToVisitComponent implements OnInit {
  @Input() planets: Planet[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
