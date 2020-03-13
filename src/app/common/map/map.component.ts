import { Component, OnInit, Input } from '@angular/core';
import {MapService} from './map.service';

@Component({
  selector: 'ago-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location: string;

  lat: number = 50.0646501;
  lng: number = 19.9449799;

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }
  mapReadyHandler() {
    this.mapService.geocodeLocation(this.location).subscribe(
      (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      });
  }

}
