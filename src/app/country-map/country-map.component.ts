import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.css']
})
export class CountryMapComponent implements OnInit {
  private map;
  map_center!: any
  setMapCenter() {
    if (this.mapRoute == "/country-map/ug") {
      this.map_center = [0.3476, 32.5825];
    } else if (this.mapRoute == "/country-map/ke") {
      this.map_center = [-0.4577, 36.946];
    }
    else if (this.mapRoute == "/country-map/gh") {
      this.map_center = [5.6037, 0.1870];
    }
    else if (this.mapRoute == "/country-map/li") {
      this.map_center = [6.4281, -9.4295];
    }
    else if (this.mapRoute == "/country-map/drc") {
      this.map_center = [-4.4419, 22.2663];
    }
    else {
      this.map_center = [8.6195, 0.8248];
    }
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.map_center,
      zoom: 8
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 8,
      minZoom: 4,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    const drc_marker = L.marker([-4.4419, 22.2663]);
    const gh_marker = L.marker([5.6037, 0.1870]);
    const li_marker = L.marker([6.4281, -9.4295]);
    const to_marker = L.marker([8.6195, 0.8248]);
    const ug_marker = L.marker([0.3476, 32.5825]);
    const ke_marker = L.marker([-0.4577, 36.946]);
    tiles.addTo(this.map);
    if (this.mapRoute == "/country-map/ug") {
      ug_marker.addTo(this.map);
    } else if (this.mapRoute == "/country-map/ke") {
      ke_marker.addTo(this.map);
    }
    else if (this.mapRoute == "/country-map/gh") {
      gh_marker.addTo(this.map);
    }
    else if (this.mapRoute == "/country-map/li") {
      li_marker.addTo(this.map);
    }
    else if (this.mapRoute == "/country-map/drc") {
      drc_marker.addTo(this.map);

    }
    else {
      to_marker.addTo(this.map);
    }
  }

  constructor(private router: Router) { }

  mapRoute: string = ''

  ngOnInit(): void {
    this.mapRoute = this.router.url;
    this.setMapCenter()
    console.log(this.mapRoute);
    this.initMap();
  }

}
