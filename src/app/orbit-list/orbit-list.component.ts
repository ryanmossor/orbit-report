import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  // @Input() declares that satellites is a property that will be passed to the component with [satellites]="sourceList"
  @Input() satellites: Satellite[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  sort(column: string): void {
    //sort() modifies the array and sorts items based on given compare function
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
      if(a[column] < b[column]) {
        return -1;
      } else if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
  }

}
