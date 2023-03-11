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
      'logo': '/assets/images/icons/cloud.png',
      'link':'/services/cloud-solutions',
      'description': "Our cloud solutions offer an enabling environment for digital transformation across Africa. CSquared Cloud offers simplified access to multi-cloud services for corporates and SMEs."
    },
    {
      'name': 'Metro Fiber',
      'logo': '/assets/images/icons/fiber.png',
      'link':'/services/wholesale-fiber',
      'description': 'Our metro fiber is a secure and scalable solution that offers high availability unlimited bandwidth.'
    },
    {
      'name': 'FTTX',
      'logo': '/assets/images/icons/fttx.png',
      'link':'/services/wholesale-fiber/view/3',
      'description': 'CSquared FTTX offering provides a wide range of last mile connectivity solutions for different consumer needs ranging from home to business connectivity across cities in Africa e.g. FFTH, FTTB, FTTT, e.t.c.'
    }, 
    {
      'name': 'Backbone Network',
      'logo': '/assets/images/icons/backbone.png',
      'link':'/services/cloud-solutions/view/3',
      'description': 'CSquared backbone solutions offer high-capacity open access network infrastructure interconnecting cities and countries across Africa.'
    },
    {
      'name': 'IP Transit',
      'logo': '/assets/images/icons/business-icon.png',
      'link':'/services/cloud-solutions/view/5',
      'description': 'CSquared offers IP Transit connectivity on our international Equiano Cable into other IXPs and other destinations across the world from Portugal bringing onward connectivity across the world.'
    },
    {
      'name': 'Wi-Fi',
      'logo': '/assets/images/icons/wifi.png',
      'link':'/services/cloud-solutions',
      'description': 'Our public Wi-Fi infrastructure is set up to serve users on the go through a Multi-ISP platform.'
    }
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
    { title: 'Google', image: '/assets/images/logos/google.png' },
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
    alt: '',
    title: ''
  }, {
    image: '/assets/images/logos/airtel_logo.png',
    thumbImage: '/assets/images/logos/airtel_logo.png',
    title: '',
    alt: ''
  }, {
    image: '/assets/images/logos/mainone_logo.png',
    thumbImage: '/assets/images/logos/mainone_logo.png',
    title: '',
    alt: ''
  }, {
    image: '/assets/images/logos/internets_logo.png',
    thumbImage: '/assets/images/logos/internets_logo.png',
    title: '',
    alt: ''
  }, {
    image: '/assets/images/logos/iwayafrica_logo.jpg',
    thumbImage: '/assets/images/logos/iwayafrica_logo.jpg',
    title: '',
    alt: ''
  },
  {
    image: '/assets/images/logos/orange_logo.png',
    thumbImage: '/assets/images/logos/orange_logo.png',
    title: '',
    alt: ''
  },
  {
    image: '/assets/images/logos/gilat_logo.png',
    thumbImage: '/assets/images/logos/gilat_logo.png',
    title: '',
    alt: ''
  },
  {
    image: '/assets/images/logos/renu_logo.png',
    thumbImage: '/assets/images/logos/renu_logo.png',
    title: '',
    alt: ''
  },
  {
    image: '/assets/images/logos/google.png',
    thumbImage: '/assets/images/logos/google.png',
    title: '',
    alt: ''
  },
  {
    image: '/assets/images/logos/seacom_logo.jpg',
    thumbImage: '/assets/images/logos/seacom_logo.jpg',
    title: '',
    alt: ''
  },
  {
    image: '/assets/images/logos/simbanet_logo.png',
    thumbImage: '/assets/images/logos/simbanet_logo.png',
    title: '',
    alt: ''
  }
  ]
}
