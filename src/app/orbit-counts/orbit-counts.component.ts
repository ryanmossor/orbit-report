import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[] = [];

  constructor() { }

  ngOnInit() {
  }

  countSatellites(property: string): number {
    let count: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
    if (property.toLowerCase() === this.satellites[i].type.toLowerCase()) {
      count++;
    }
  }
    return count;
  }
}
