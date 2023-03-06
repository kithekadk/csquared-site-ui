import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  targets: { title: string, image: string }[] = [
    { title: "MNO's", image: '/assets/images/home/MNO.jpg' },
    { title: 'Data Centers', image: '/assets/images/home/country.png' },
    { title: 'SMEs', image: '/assets/images/home/rolling_wire.jpg' },
    { title: 'ISPs', image: '/assets/images/home/data_center.jpg' },
    { title: 'Public - Point to Point Connection', image: '/assets/images/home/rolling_wire.jpg' },
    { title: 'Cloud Centers', image: '/assets/images/home/country.png' },
  ]

  services: any[] = [
    {
      'name': 'Cloud Services',
      'logo': '/assets/images/icons/cloud.svg',
      'describtion': "CSquared Cloud offers simplified access to multi-cloud services for cooperates and SMEs. Our solutions facilitate an enabling environment for the digital transformation across Africa."
    },
    {
      'name': 'Metro Fiber',
      'logo': '/assets/images/icons/ethernet.svg',
      'describtion': 'Metro fiber networks demand high availability. CSquared provides dedicated, high bandwidth, secure and scalable solutions with virtually unlimited bandwidth to help our customers connect to locations within the metro.'
    },
    {
      'name': 'FTTX',
      'logo': '/assets/images/icons/house-up-fill.svg',
      'describtion': 'CSquared has deployed various metros across cities in Africa enabling last-mile access to mobile towers, large enterprises, SMEs and homes providing a range of services from dark fiber to tiered capacity.'
    },
    {
      'name': 'Solutions',
      'logo': '/assets/images/icons/arrow-repeat.svg',
      'describtion': 'CSquared has a public Wi-Fi infrastructure setup to serve end users on-the-go as well as fixed wireless users. It’s a multiple ISP platform that provides end users with various ISP choices.'
    },

    {
      'name': 'Backbone',
      'logo': '/assets/images/icons/broadcast-pin.svg',
      'describtion': 'CSquared offers fibre backbone products which connect metros within our operating countries. With tiered capacities from as low as 1Gb and up to 100G+, we offer wholesale dedicated Point-to-Presence (PoP) to and from a predetermined PoP.'
    },
    {
      'name': 'Wifi',
      'logo': '/assets/images/icons/wifi.svg',
      'describtion': 'CSquared has a public Wi-Fi infrastructure setup to serve end users on-the-go as well as fixed wireless users. It’s a multiple tenant public wifi platform that provides end users with various ISP choices.'
    },

  ];

  logos: { title: string, image: string }[] = [
    { title: "MTN", image: '/assets/images/logos/mtn_logo.png' },
    { title: 'Airtel', image: '/assets/images/logos/airtel_logo.png' },
    { title: 'Main One', image: '/assets/images/logos/mainone_logo.png' },
    { title: 'Internet Solution', image: '/assets/images/logos/internets_logo.png' },
    { title: 'IWay Africa', image: '/assets/images/logos/iwayafrica_logo.jpg' },
    { title: 'Orange', image: '/assets/images/logos/orange_logo.png' },
    { title: 'Gilat', image: '/assets/images/logos/gilat_logo.png' },
    { title: 'Renu', image: '/assets/images/logos/renu_logo.png' },
    { title: 'Google', image: '/assets/images/logos/google_logo.png' },
    { title: 'Seacom', image: '/assets/images/logos/seacom_logo.jpg' },
    { title: 'Simbanet', image: '/assets/images/logos/simbanet_logo.png' },

  ]



  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private countryService: CountryService) { }

  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      Userlat: [null, [Validators.required]],
      Userlng: [null, [Validators.required]],
    })
    AOS.init();
    this.getUserLocation();

    this.countryService.setCountry('global')

  }

  userslocationName: string = '';
  userLocName(lat: number, lng: number) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBM8imo0O1irRbd6qHLex5Q6UP4HwGzuzs`;
    this.http.get(url).subscribe((data: any) => {
      this.userslocationName = data.results[0].formatted_address;
      if ((this.userslocationName).toLowerCase().includes('kenya')) {
        this.router.navigate(['/country/kenya'])
      } else if ((this.userslocationName).toLowerCase().includes('uganda')) {
        this.router.navigate(['/country/uganda'])
      }
      else if ((this.userslocationName).toLowerCase().includes('liberia')) {
        this.router.navigate(['/country/liberia'])
      }
      else if ((this.userslocationName).toLowerCase().includes('democratic republic of the congo')) {
        this.router.navigate(['/country/drc'])
      }
      else if ((this.userslocationName).toLowerCase().includes('ghana')) {
        this.router.navigate(['/country/ghana'])
      }
      else if ((this.userslocationName).toLowerCase().includes('togo')) {
        this.router.navigate(['/country/togo'])
      } else {
        this.router.navigate(['/country/hybrid'])
      }
    });
  }
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log(longitude, latitude);
        this.userLocName(latitude, longitude);
        this.form.get('Userlat')?.setValue(latitude)
        this.form.get('Userlng')?.setValue(longitude)
        this.passCoordinatesToUrl(longitude, latitude);
      });
    } else {
      console.log('No support for geolocation')
    }
  }

  passCoordinatesToUrl(Longitude: number, Latitude: number) {
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}&type=street`
  }

  coverage: Array<object> = [{
    image: '/assets/images/logos/mtn_logo.png',
    thumbImage: '/assets/images/logos/mtn_logo.png',
    alt: 'MTN',
    title: 'MTN'
  }, {
    image: '/assets/images/logos/airtel_logo.png',
    thumbImage: '/assets/images/logos/airtel_logo.png',
    title: 'Airtel',
    alt: 'Airtel'
  }, {
    image: '/assets/images/logos/mainone_logo.png',
    thumbImage: '/assets/images/logos/mainone_logo.png',
    title: 'Main One',
    alt: 'Main One'
  }, {
    image: '/assets/images/logos/internets_logo.png',
    thumbImage: '/assets/images/logos/internets_logo.png',
    title: 'Internet Solutions',
    alt: 'Internet Solutions'
  }, {
    image: '/assets/images/logos/iwayafrica_logo.jpg',
    thumbImage: '/assets/images/logos/iwayafrica_logo.jpg',
    title: 'Iway Africa',
    alt: 'Iway Africa'
  },
  {
    image: '/assets/images/logos/orange_logo.png',
    thumbImage: '/assets/images/logos/orange_logo.png',
    title: 'Orange',
    alt: 'Orange'
  },
  {
    image: '/assets/images/logos/gilat_logo.png',
    thumbImage: '/assets/images/logos/gilat_logo.png',
    title: 'Gilat',
    alt: 'Gilat'
  },
  {
    image: '/assets/images/logos/renu_logo.png',
    thumbImage: '/assets/images/logos/renu_logo.png',
    title: 'Renu',
    alt: 'Renu'
  },
  {
    image: '/assets/images/logos/google_logo.png',
    thumbImage: '/assets/images/logos/google_logo.png',
    title: 'Google',
    alt: 'Google'
  },
  {
    image: '/assets/images/logos/seacom_logo.jpg',
    thumbImage: '/assets/images/logos/seacom_logo.jpg',
    title: 'Seacom',
    alt: 'Seacom'
  },
  {
    image: '/assets/images/logos/simbanet_logo.png',
    thumbImage: '/assets/images/logos/simbanet_logo.png',
    title: 'Simbanet',
    alt: 'Simbanet'
  }
  ]
}
