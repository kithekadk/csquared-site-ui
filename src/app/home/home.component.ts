import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  targets: {title: string, image: string}[] = [
      {title:"MNO's", image:'/assets/images/home/MNO.jpg'},
      {title:'Data Centers', image:'/assets/images/home/country.png'},
      {title:'SMEs', image:'/assets/images/home/rolling_wire.jpg'},
      {title:'ISPs', image:'/assets/images/home/data_center.jpg'},
      {title:'Public - Point to Point Connection', image:'/assets/images/home/rolling_wire.jpg'},
      {title:'Cloud Centers', image:'/assets/images/home/country.png'},
    ]

    services: any[] = [
    {  
    'name': 'Cloud Services'  
    }, 
    {  
    'name': 'Network'  
    }, 
    {  
      'name': 'Wifi'  
    },
    {  
      'name': 'Cloud Security'  
    },
    {
      'name':'FTTX'
    },
    {
      'name':'Metro Fiber'
    }
];

  constructor(private http: HttpClient, private fb:FormBuilder, private router:Router) { }
form!:FormGroup;
  ngOnInit(): void {
    this.form= this.fb.group({
      Userlat: [null, [Validators.required]],
      Userlng: [null, [Validators.required]],
    })
    AOS.init();
    this.getUserLocation();
  }

  userslocationName:string='';
  userLocName(lat:number, lng:number){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBM8imo0O1irRbd6qHLex5Q6UP4HwGzuzs`;
    this.http.get(url).subscribe((data: any) => {
      this.userslocationName = data.results[0].formatted_address;
      if((this.userslocationName).toLowerCase().includes('kenya')){
        this.router.navigate(['/country/kenya'])
      }else if((this.userslocationName).toLowerCase().includes('uganda')){
        this.router.navigate(['/country/uganda'])
      }
      else if((this.userslocationName).toLowerCase().includes('liberia')){
        this.router.navigate(['/country/liberia'])
      }
      else if((this.userslocationName).toLowerCase().includes('democratic republic of the congo')){
        this.router.navigate(['/country/drc'])
      }
      else if((this.userslocationName).toLowerCase().includes('ghana')){
        this.router.navigate(['/country/ghana'])
      }
      else if((this.userslocationName).toLowerCase().includes('togo')){
        this.router.navigate(['/country/togo'])
      }else{
        this.router.navigate(['/country/hybrid'])
      }
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
}
