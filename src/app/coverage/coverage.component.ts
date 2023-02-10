import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private router:Router, private fb:FormBuilder) { }

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
  }
  getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log(longitude,latitude)
        this.form.get('Userlat')?.setValue(latitude)
        this.form.get('Userlng')?.setValue(longitude)
        this.passCoordinatesToUrl(longitude, latitude);
      });
    }else{
      console.log('No support for geolocation')
    }
  }
  passCoordinatesToUrl(Longitude:number, Latitude:number){
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
    console.log("url=",url);
  }
}
