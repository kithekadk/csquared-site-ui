import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { contactus, Countries, order } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countriesheader: Countries[] =
    [
      {
        country: 'uganda',
        header: {
          height:"70vh",
          title: ["Join our amazing Network in Uganda", "Join our amazing Network in Uganda","Join our amazing Network in Uganda"],
          content: ["CSquared’s broadband network is helping increase internet access in Uganda", "CSquared’s broadband network is helping increase internet access in Uganda", "CSquared’s broadband network is helping increase internet access in Uganda"]
          , image: ['./../../../assets/Csquared/pexels-timothy-nkwasibwe-8365399.jpg',
          "../assets/images/home/slide_2.jpg",
          "../assets/images/home/slide_3.jpg"          
        ]
        },
        search: true,
        button: false,
        link: false,

      },
        {
        country: 'global',
        header: {
          height:"70vh",
          title: ['Hybrid, multi-cloud and cloud-to-cloud recovery solutions', 'A digital Africa', 'Super connectivity'],
          content: ['CSquared Cloud enables cloud and digital transformation through our extensive cloud network connectivity and solutions across Africa.','We are bringing high-quality broadband to Africa’s major cities by investing in internet infrastructure and enabling  open access to local Internet Service Providers (ISPs) and mobile network operators (MNOs).','Our unique offering of reliable and high-speed connectivity and innovative digital services can unleash your business towards the digital future.']
          , image : [
            "../assets/images/home/slide_1.jpg",
            "../assets/images/home/slide_2.jpg",
            "../assets/images/home/slide_3.jpg"
        
        
          ]
        },
        search: false,
        button: false,
        link: false,

      },
      {
        country: 'ghana',
        header: {
          height:"70vh",
          title: ["Join our amazing Network in Ghana","Join our amazing Network in Ghana","Join our amazing Network in Ghana","Join our amazing Network in Ghana"],
          content: ["CSquared currently has 5 metros in Ghana and over 5000 Base Transmission towers largely owned by ATC, Eaton & Helios.","CSquared currently has 5 metros in Ghana and over 5000 Base Transmission towers largely owned by ATC, Eaton & Helios.","CSquared currently has 5 metros in Ghana and over 5000 Base Transmission towers largely owned by ATC, Eaton & Helios."],
          image: ['/assets/west-african/DSCF5096.jpg',
                  "/assets/Csquared/accra.jpg",
                  "/assets/west-african/Photo 2.jpg"
        ]
        },
        search: true,
        button: false,
        link: false,

      },
      {
        country: 'liberia',
        header: {
          height:"70vh",
          title: ["Join our amazing Network in Liberia","Join our amazing Network in Liberia","Join our amazing Network in Liberia"],
          content: ["CSquared is the only wholesale infrastructure provider with 180+ Kms of metro fiber in Monrovia, providing services to all MNOs, ISPs and the Government of Liberia","CSquared is the only wholesale infrastructure provider with 180+ Kms of metro fiber in Monrovia, providing services to all MNOs, ISPs and the Government of Liberia","CSquared is the only wholesale infrastructure provider with 180+ Kms of metro fiber in Monrovia, providing services to all MNOs, ISPs and the Government of Liberia"],
          image: ['/assets/liberia/20200215_190135.jpg',
                  "/assets/liberia/DSC_0004.JPG",
                  "/assets/liberia/DSC_0021.JPG"
        ]
        },
        search: true,
        button: false,
        link: false,
      },

      {
        country: 'togo',
        header: {
          height:"70vh",
          title: ["Join our amazing Network in Togo","Join our amazing Network in Togo","Join our amazing Network in Togo","Join our amazing Network in Togo"],
          content: ["CSquared is the only wholesale infrastructure provider with 180+ Kms of metro fiber in Monrovia, providing services to all MNOs, ISPs and the Government of Liberia","CSquared is the only wholesale infrastructure provider with 180+ Kms of metro fiber in Monrovia, providing services to all MNOs, ISPs and the Government of Liberia","CSquared is the only wholesale infrastructure provider with 180+ Kms of metro fiber in Monrovia, providing services to all MNOs, ISPs and the Government of Liberia"],
          image: ["/assets/togo/IMG_1068.jpg",
                  '/assets/togo/DJI_0047 (1).jpg',
                  "/assets/togo/DJI_0087.jpg"
        ]
        },
        search: true,
        button: false,
        link: false,
      },
      {
        country: 'kenya',
        header: {
          height:"70vh",
          title: ["Build hybrid, multicloud, cloud-to-cloud, and disaster recovery solutions ","Build hybrid, multicloud, cloud-to-cloud, and disaster recovery solutions ","Build hybrid, multicloud, cloud-to-cloud, and disaster recovery solutions "],
          content: ["Work securely anywhere and anytime through an efficient cloud network Business Models are changing", "Work securely anywhere and anytime through an efficient cloud network Business Models are changing", "Work securely anywhere and anytime through an efficient cloud network Business Models are changing"],
          image: ['https://media.cnn.com/api/v1/images/stellar/prod/131211104520-kenya-photography-contest-7.jpg?q=w_1793,h_1200,x_0,y_0,c_fill/w_1280',
                  "../assets/images/home/slide_2.jpg",
                  "../assets/images/home/slide_3.jpg"
        ]
        },
        search: false,
        button: true,
        link: false,
      },
      {
        country: 'drc',
        header: {
          height:"70vh",
          title: ["Join our amazing Network in the Basin","Join our amazing Network in the Basin","Join our amazing Network in the Basin"],
          content: ["Csquared has acquired the National licenses to allow it to deploy, own and operate Metro fiber, FTTx and Long Haul networks in all regions of DRC","Csquared has acquired the National licenses to allow it to deploy, own and operate Metro fiber, FTTx and Long Haul networks in all regions of DRC","Csquared has acquired the National licenses to allow it to deploy, own and operate Metro fiber, FTTx and Long Haul networks in all regions of DRC"],
          image: ['https://previews.123rf.com/images/fyletto/fyletto1301/fyletto130100018/17161899-no-s%C3%B3lo-las-dunas-de-arena-monta%C3%B1as-%C3%A1ridas-pero-tambi%C3%A9n-son-una-cara-de-la-poderosa-desierto-del-sah.jpg',
                  "../assets/images/home/slide_2.jpg",
                  "../assets/images/home/slide_3.jpg"
                  ]
        },
        search: false,
        button: false,
        link: true,

      }
    ]

  private countrySubject = new BehaviorSubject<string>('');
  public setCountry$ = this.countrySubject.asObservable();
  constructor(private http:HttpClient) { }

  
  getCountry(id:string){
    return this.http.get(`https://cms.shiftechafrica.com/api/v1/countries/${id}`).pipe(map(res => {
      return res;
    }))
  }

  // headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  createOrder(neworder:order){
    return this.http.post<order>('https://cms.shiftechafrica.com/api/v1/order', neworder);
  }

  contactCsquared(issue:contactus){
    return this.http.post<contactus>('https://cms.shiftechafrica.com/api/v1/contact',issue);
  }


  getOneCountry(code: string): Countries {
    let country = this.countriesheader.find(country => {
      return country.country === code
    }) as Countries

    return country
  }

  

  setCountry(country: string) {
    this.countrySubject.next(country);
  }

  getCountryData() {
    // return this.countriesheader.find(a=>a.country==this.setCountry) as Countries
  }

  
}




