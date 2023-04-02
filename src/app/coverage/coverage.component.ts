import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {

  // coverage:Array<object>=[{
  //   image: '../../assets/Csquared/nairobi.jpg',
  //   thumbImage: '../../assets/Csquared/nairobi.jpg',
  //   alt: 'Kenya',
  //   title: 'Kenya'
  // }, {
  //   image: '../../assets/Csquared/pexels-timothy-nkwasibwe-8365399.jpg',
  //   thumbImage: '../../assets/Csquared/pexels-timothy-nkwasibwe-8365399.jpg',
  //   title: 'Uganda',
  //   alt: 'Uganda'
  // }, {
  //   image: '../../assets/Csquared/pexels-asiama-junior-6567674.jpg',
  //   thumbImage: '../../assets/Csquared/pexels-asiama-junior-6567674.jpg',
  //   title: 'Ghana',
  //   alt: 'Ghana'
  // }, {
  //   image: '../../assets/images/flags/drc_flag.jpg',
  //   thumbImage: '../../assets/images/flags/drc_flag.jpg',
  //   title: 'DRC',
  //   alt: 'DRC'
  // }, {
  //   image: '../../assets/images/flags/Flag_of_Liberia.svg',
  //   thumbImage: '../../assets/images/flags/Flag_of_Liberia.svg',
  //   title: 'Liberia',
  //   alt: 'Liberia'
  // },
  // {
  //   image: '../../assets/images/flags/Flag_of_Togo.svg.png',
  //   thumbImage: '../../assets/images/flags/Flag_of_Togo.svg.png',
  //   title: 'Togo',
  //   alt: 'Togo'
  // }]


  countries:{name:string,code:string,id:string, flag:string}[]=[
    {
      name :"Global",
      code:'hybrid',
      id:'',
      flag:'./../../assets/images/flags/earth-1681722__340.png'
    },
    {
      name :"Uganda",
      code:'uganda',
      id:'78c7d800-85ad-11eb-82e0-71c6f09a2bae',
      flag:'./../../assets/images/flags/Flag_of_Uganda.svg.png'
    },
    {
      name :"Kenya",
      code:'kenya',
      id:'78ba6f60-85ad-11eb-88f1-39b4763e914c',
      flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
    },
     {
      name :"Ghana",
      code:'ghana',
      id:'78b6b910-85ad-11eb-8c83-cd8b9be0f4f1',
      flag:'./../../assets/images/flags/255px-Flag_of_Ghana.svg.png'
    },
      {
      name :"DRC Congo",
      code:'drc',
      id:'78b32a20-85ad-11eb-8ef6-a9906fd1e035',
      flag:'./../../assets/images/flags/drc_flag.jpg'
    },
      {
      name :"Liberia",
      code:'liberia',
      id:'78bb1f20-85ad-11eb-9ca4-dfa9c20bb376',
      flag:'./../../assets/images/flags/Flag_of_Liberia.svg'
    },
     {
      name :"Togo",
      code:'togo',
      id:'78c68a50-85ad-11eb-813f-b19440c3cb6a',
      flag:'./../../assets/images/flags/Flag_of_Togo.svg.png'
    }
  ]
  products:any[]=[]
  product_id:any[]=[]
  view= false
  constructor(private router:Router, private fb:FormBuilder, private http:HttpClient, private countryservice: CountryService) { }

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  errorContainer=false
  form!:FormGroup;
  searchform!:FormGroup
  ngOnInit(): void {

    Aos.init();
    this.form= this.fb.group({
      country_id: [null, [Validators.required]],
      product_id: [null, [Validators.required]],
      email:[null, [Validators.required]]
    })

    // Search form logic
    this.searchform = this.fb.group({
      Userlat: [null, [Validators.required]],
      Userlng: [null, [Validators.required]],
    })
    

    this.form.get('country_id')?.valueChanges.subscribe(country_id=>{
      if(this.form.get('country_id')?.value !== ''){
        this.countryservice.getCountry(country_id).subscribe(res=>{
        // getting into the products array
        for(let product of res['products']){
          this.product_id.push(product.id)
          this.products.push(product.name)
          // console.log(this.product_id);
          // console.log(this.products);
          

          
        }
                    // this.products=[];// resetting values in the array on new option select
                    // for(let x of res['products'] ){
                    //   for (let sub_category of x.category.sub_categories){
                        // this.products.push(sub_category) 
                        // console.log((this.products));
                    //   }         
                    // }     
        
      })
      }
      
    })
    
    this.getUserLocation();  
  }

  navigate($event:any){
    const country:string=($event.target.alt).toLowerCase();
    this.router.navigate(['country/',country])
  }

  makeOrder(){
    if(this.form){
   
      console.log(this.form.value);
      this.countryservice.createOrder(this.form.value).subscribe(res=>{
        console.log(res);   
        this.form.reset();
        this.view=true; 
        setTimeout(() => {
          this.view=false;
        }, 3000);    
      })
    }
  }

  receiverAddress: string = '';
  receiverLatitude!: number;
  receiverLongitude!: number;
  

  AddressChange(address: any) {
    this.receiverAddress = address.formatted_address;
    this.receiverLatitude = address.geometry.location.lat();
    this.receiverLongitude = address.geometry.location.lng();
    console.log(this.receiverAddress.toLowerCase());
    console.log(this.receiverLatitude);
    console.log(this.receiverLongitude);
    
    // Redirecting to searched location homepage if it exists else view global homepage
    if(this.receiverAddress.toLowerCase().includes('kenya')){
      this.markerPositions.push({lat: this.receiverLatitude, lng:this.receiverLongitude})
      // this.router.navigate(['country/','kenya'])
    }
    else if(this.receiverAddress.toLowerCase().includes('uganda')){
      this.markerPositions.push({lat: this.receiverLatitude, lng:this.receiverLongitude})
      // this.router.navigate(['country/','uganda'])
    }
    else if(this.receiverAddress.toLowerCase().includes('liberia')){
      this.markerPositions.push({lat: this.receiverLatitude, lng:this.receiverLongitude})
      // this.router.navigate(['country/','liberia'])
    }
    else if(this.receiverAddress.toLowerCase().includes('togo')){
      this.markerPositions.push({lat: this.receiverLatitude, lng:this.receiverLongitude})
      // this.router.navigate(['country/','togo'])
    }
    else if(this.receiverAddress.toLowerCase().includes('ghana')){
      this.markerPositions.push({lat: this.receiverLatitude, lng:this.receiverLongitude})
      // this.router.navigate(['country/','ghana'])
    }
    else if(this.receiverAddress.toLowerCase().includes('democratic republic of the congo')){
      this.markerPositions.push({lat: this.receiverLatitude, lng:this.receiverLongitude})
      // this.router.navigate(['country/','drc'])
    }else{
      // this.router.navigate(['country/','hybrid'])
      this.errorContainer=true
      this.markerPositions.push({lat: this.receiverLatitude, lng:this.receiverLongitude})
      setTimeout(() => {
        this.errorContainer=false
      }, 3000);
    }
    
  }

/**
 * Getting users location name if user accepts fetching their coordinates
 */
  userslocationName:string='';
  userLocName(lat:number, lng:number){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBM8imo0O1irRbd6qHLex5Q6UP4HwGzuzs`;
    this.http.get(url).subscribe((data: any) => {
      this.userslocationName = data.results[0].formatted_address;
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
  {lat: 8.6195,lng: 0.8248},
];


  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }
}
