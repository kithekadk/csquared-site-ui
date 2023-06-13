import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from '../services/country.service';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageNumber:number=1
  spinneroff=true
  impactImages:any[]=[]
  impactTitle:any[]=[]
  impactDescription:any[]=[]
  impactCategory:any[]=[]
  impactCategoryID:any[]=[]
  impactnames:any[]=[]
  impactCategoryName:any[]=[]
  impactSlug:any[]=[]
  mergedArray:any[]=[]
  mergedArray2:any[]=[]


  hide=false
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
      'name': 'Cloud Security',
      'logo': '/assets/services/service-images/Cloudconnectivity(1).jpg',
      'link':'/services/cloud-solutions',
      'description': "Our cloud solutions offer an enabling environment for digital transformation across Africa. CSquared Cloud offers simplified access to multi-cloud services for corporates and SMEs."
    },
    {
      'name': 'Metro Fiber',
      'logo': '/assets/services/service-images/Portfiber.jpg',
      'link':'/services/wholesale-fiber',
      'description': 'Our metro fiber is a secure and scalable solution that offers high availability unlimited bandwidth.'
    },
    {
      'name': 'FTTX',
      'logo': '/assets/services/service-images/Fiberopticnetwork.jpg',
      'link':'/services/wholesale-fiber',
      'description': 'CSquared FTTX offering provides a wide range of last mile connectivity solutions for different consumer needs ranging from home to business connectivity across cities in Africa e.g. FFTH, FTTB, FTTT, e.t.c.'
    },
    {
      'name': 'Backbone Network',
      'logo': 'https://media.istockphoto.com/id/1313415001/photo/a-black-male-server-room-technician-working-at-business-reopening.jpg?b=1&s=170667a&w=0&k=20&c=zK_Uh9Z6bSbRB1bgN7_gEpH9U8j3O6FuDbhO5HnWWqM=',
      'link':'/services/wholesale-fiber',
      'description': 'CSquared backbone solutions offer high-capacity open access network infrastructure interconnecting cities and countries across Africa.'
    },
    {
      'name': 'IP Transit',
      'logo': '/assets/services/service-images/IPTransit.jpg',
      'link':'/services/wholesale-fiber',
      'description': 'CSquared offers IP Transit connectivity on our international Equiano Cable into other IXPs and other destinations across the world from Portugal bringing onward connectivity across the world.'
    },
    {
      'name': 'Wi-Fi',
      'logo': '/assets/services/service-images/Wi-Fi.jpg',
      'link':'/services/cloud-solutions',
      'description': 'Our public Wi-Fi infrastructure is set up to serve users on the go through a Multi-ISP platform.'
    }
  ];

  logos: { title: string, image: string }[] = [

    { title: 'Airtel', image: '/assets/images/logos/airtel_logo.png' },
    { title: 'Main One', image: '/assets/images/logos/mainone_logo.png' },
    { title: 'Orange', image: '/assets/images/logos/orange_logo.png' },
    { title: "MTN", image: '/assets/images/logos/mtn_logo.png' },
    { title: 'Internet Solution', image: '/assets/images/logos/internets_logo.png' },
    { title: 'IWay Africa', image: '/assets/images/logos/iwayafrica_logo.jpg' },
    { title: 'Renu', image: '/assets/images/logos/renu_logo.png' },
    { title: 'Gilat', image: '/assets/images/logos/gilat_logo.png' },
    { title: 'Google', image: '/assets/images/logos/google.png' },
    { title: 'Seacom', image: '/assets/images/logos/seacom_logo.jpg' },
    { title: 'Simbanet', image: '/assets/images/logos/simbanet_logo.png' },

  ]
  partners: { title: string, image: string, rootdomain:string }[] = [

    { title: 'Google', image: '/assets/Csquared/google.png', rootdomain: 'https://workspace.google.com/products/sites/'},
    { title: 'Convergence', image: '/assets/Csquared/convergence.png', rootdomain: 'https://www.convergencepartners.com/' },
    { title: 'IFC', image: '/assets/Csquared/ifc.png', rootdomain: 'https://www.ifc.org/wps/wcm/connect/corp_ext_content/ifc_external_corporate_site/home' },
    { title: "Mitsui", image: '/assets/Csquared/mitsui.png', rootdomain: 'https://www.mitsui.com/jp/en/index.html' }
  ]



  constructor(private apiservice:ApiService, private http: HttpClient, private fb: FormBuilder, private router: Router, private countryService: CountryService) { }

  form!: FormGroup;
  ngOnInit(): void {
    this.apiservice.getFeaturedNews().subscribe(res=>{
      console.log(res['data']);

      // GETTING IMPACT IMAGES
      for(let image of res['data']){
        let img = image.media?.pathUrls[0]
        let avatar = image.name[0]
        if(img == null || undefined){
          this.impactImages.push(avatar)
        }else{
        this.impactImages.push(img)
        }  
              
      }

      // GETTING IMPACT TITLES
      for(let title of res['data']){
        let titles = title.name
        // console.log(titles);
        this.impactTitle.push(titles)
      }

      // GETTING IMPACT DESCRIPTION
      for(let desc of res['data']){
        let descriptions = desc.description
        // console.log(descriptions);
        this.impactDescription.push(descriptions)
       
      }

      // News ID
      for(let id of res['data']){
        let slug = id.slug
        this.impactCategoryID.push(slug)
        // this.impactCategoryID = [... new Set(this.impactCategory)]
        // console.log(this.impactCategoryID);
      }
      
      this.mergedArray = this.impactImages.map((img, index) =>({
        image:img, title:this.impactTitle[index], description: this.impactDescription[index], newsSlug: this.impactCategoryID[index]
      }), this.spinneroff=false)
      this.mergedArray2 = this.mergedArray
      // console.log(this.mergedArray2);
    })

    this.form = this.fb.group({
      Userlat: [null, [Validators.required]],
      Userlng: [null, [Validators.required]],
    })
    AOS.init();
    this.getUserLocation();

    this.countryService.setCountry('global');
    window.onresize=()=>{
      this.hide=window.innerWidth<500
      // console.log(this.hide);

    }

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
