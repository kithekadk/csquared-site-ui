import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {

  coverage:Array<object>=[{
    image: '../../assets/Csquared/nairobi.jpg',
    thumbImage: '../../assets/Csquared/nairobi.jpg',
    alt: 'Kenya',
    title: 'Kenya'
  }, {
    image: '../../assets/Csquared/pexels-timothy-nkwasibwe-8365399.jpg',
    thumbImage: '../../assets/Csquared/pexels-timothy-nkwasibwe-8365399.jpg',
    title: 'Uganda',
    alt: 'Uganda'
  }, {
    image: '../../assets/Csquared/pexels-asiama-junior-6567674.jpg',
    thumbImage: '../../assets/Csquared/pexels-asiama-junior-6567674.jpg',
    title: 'Ghana',
    alt: 'Ghana'
  }, {
    image: '../../assets/images/flags/drc_flag.jpg',
    thumbImage: '../../assets/images/flags/drc_flag.jpg',
    title: 'DRC',
    alt: 'DRC'
  }, {
    image: '../../assets/images/flags/Flag_of_Liberia.svg',
    thumbImage: '../../assets/images/flags/Flag_of_Liberia.svg',
    title: 'Liberia',
    alt: 'Liberia'
  },
  {
    image: '../../assets/images/flags/Flag_of_Togo.svg.png',
    thumbImage: '../../assets/images/flags/Flag_of_Togo.svg.png',
    title: 'Togo',
    alt: 'Togo'
  }]
  constructor(private router:Router, private fb:FormBuilder, private http:HttpClient) { }

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  form!:FormGroup;
  ngOnInit(): void {
    Aos.init();
    this.form= this.fb.group({
      receiverLocation: [null, [Validators.required]],
      Userlat: [null, [Validators.required]],
      Userlng: [null, [Validators.required]],
    })
    this.getUserLocation();  
  }

  navigate($event:any){
    const country:string=($event.target.alt).toLowerCase();
    this.router.navigate(['country/',country])
  }

  receiverAddress: string = '';
  receiverLatitude!: number;
  receiverLongitude!: number;
  

  AddressChange(address: any) {
    this.receiverAddress = address.formatted_address;
    this.receiverLatitude = address.geometry.location.lat();
    this.receiverLongitude = address.geometry.location.lng();
    console.log(this.receiverAddress.toLowerCase());
    
    //Redirecting to searched location homepage if it exists else view global homepage
    //When in a country that
    if(this.receiverAddress.toLowerCase().includes('kenya')){
      this.router.navigate(['country/','kenya'])
    }
    else if(this.receiverAddress.toLowerCase().includes('uganda')){
      this.router.navigate(['country/','uganda'])
    }
    else if(this.receiverAddress.toLowerCase().includes('liberia')){
      this.router.navigate(['country/','liberia'])
    }
    else if(this.receiverAddress.toLowerCase().includes('togo')){
      this.router.navigate(['country/','togo'])
    }
    else if(this.receiverAddress.toLowerCase().includes('ghana')){
      this.router.navigate(['country/','ghana'])
    }
    else if(this.receiverAddress.toLowerCase().includes('democratic republic of the congo')){
      this.router.navigate(['country/','drc'])
    }else{
      this.router.navigate(['country/','hybrid'])
    }
    
  }
/**
 * Getting users location name if user accepts fetching their coordinates
 */

  userslocationName:string='';
  userLocName(lat:number, lng:number){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBuvVn5bGQtP3kSYSewu9Gb6_jZ7ySO75A`;
    this.http.get(url).subscribe((data: any) => {
      this.userslocationName = data.results[0].formatted_address;
      console.log((this.userslocationName).toLowerCase().includes('kenya'||'uganda'));
    });
  }
  getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log(longitude,latitude);
        this.userLocName(latitude,longitude);
        this.form.get('Userlat')?.setValue(latitude)
        this.form.get('Userlng')?.setValue(longitude)
        this.passCoordinatesToUrl(longitude, latitude);
      });
    }else{
      console.log('No support for geolocation')
    }
  }

passCoordinatesToUrl(Longitude:number, Latitude:number){
  const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}&type=street`
}
  

display: any;
zoom = 3.0;
center: google.maps.LatLngLiteral = {
  lat: 0,lng: 22.2663
};
clickMap(event: any) {
  if (event.latLng != null) this.center = event.latLng.toJSON();
}
move(event: any) {
  if (event.latLng != null) this.display = event.latLng.toJSON();
}
markerOptions: google.maps.MarkerOptions = {
  draggable: false,
};

markerPositions: google.maps.LatLngLiteral[] = [
  {lat: -0.4577,lng: 36.946},
  {lat: 0.3476,lng: 32.5825},
  {lat: -4.4419,lng: 22.2663},
  {lat: 5.6037,lng: 0.1870},
  {lat: 6.4281,lng: -9.4295},
  {lat: 8.6195,lng: 0.8248}];


  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }
}
