import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 8.7832, 8.7832 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    const ke_marker= L.marker([-0.4577,36.946]);
    const ug_marker= L.marker([0.3476, 32.5825]);
    const gh_marker= L.marker([-4.4419, 22.2663]);
    const drc_marker= L.marker([5.6037, 0.1870]);
    const to_marker= L.marker([6.4281,-9.4295]);
    const li_marker= L.marker([8.6195, 0.8248]);
    tiles.addTo(this.map);
    ke_marker.addTo(this.map);
    ug_marker.addTo(this.map);
    gh_marker.addTo(this.map);
    drc_marker.addTo(this.map);
    to_marker.addTo(this.map);
    li_marker.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    
  }
}
