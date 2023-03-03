import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Countries, order } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countriesheader: Countries[] =
    [
      {
        country: 'uganda',
        header: {
          height:"90vh",
          title: "Join our amazing Network in Uganda",
          content: "Tsagaan Suvarga is an arduous scarp in Olziit soum of Dundgovi province. Once a floor of the ocean, this scarp looks like a white stupa, hence the name Tsagaan Suvarga (white stupa). This scarp is 400 meters long and 60 meters tall with a 90 degree brink. After a rain, the water pouring down the scarp makes it look like a huge waterfall."
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
          title: "Today, anyone can get Lightspeed Network.",
          content: "The demand for Cloud computing services has grown considerably in recent years, owing to enterprises’ demand for lower operating costs and capital expenditure with improved productivity and greater efficiency and agility. Cloud services offer operational flexibility, scalability, improved time to market, and cost efficiencies to enterprises"
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
          height:"90vh",
          title: "Join our amazing Network in Ghana",
          content: "Tsagaan Suvarga is an arduous scarp in Olziit soum of Dundgovi province. Once a floor of the ocean, this scarp looks like a white stupa, hence the name Tsagaan Suvarga (white stupa). This scarp is 400 meters long and 60 meters tall with a 90 degree brink. After a rain, the water pouring down the scarp makes it look like a huge waterfall.",
          image: ['./../../assets/Csquared/accra.jpg',
                  "../assets/images/home/slide_2.jpg",
                  "../assets/images/home/slide_3.jpg"
        ]
        },
        search: true,
        button: false,
        link: false,

      },
      {
        country: 'liberia',
        header: {
          height:"90vh",
          title: "Join our amazing Network in Liberia",
          content: "Tsagaan Suvarga is an arduous scarp in Olziit soum of Dundgovi province. Once a floor of the ocean, this scarp looks like a white stupa, hence the name Tsagaan Suvarga (white stupa). This scarp is 400 meters long and 60 meters tall with a 90 degree brink. After a rain, the water pouring down the scarp makes it look like a huge waterfall.",
          image: ['https://oceandecade.org/wp-content/uploads/2021/08/e-0-j-19-gl-xo-ac-a-fhr@3x-1.png',
                  "../assets/images/home/slide_2.jpg",
                  "../assets/images/home/slide_3.jpg"
        ]
        },
        search: true,
        button: false,
        link: false,


      },

      {
        country: 'togo',
        header: {
          height:"90vh",
          title: "Join our amazing Network in Togo",
          content: "Tsagaan Suvarga is an arduous scarp in Olziit soum of Dundgovi province. Once a floor of the ocean, this scarp looks like a white stupa, hence the name Tsagaan Suvarga (white stupa). This scarp is 400 meters long and 60 meters tall with a 90 degree brink. After a rain, the water pouring down the scarp makes it look like a huge waterfall.",
          image: ['https://www.colliers.com/-/media/images/colliers/emea/netherlands/research/2019/supermarkt-1536x1040.ashx?bid=76c600addb1840f1af748d14f17a8d34',
                  "../assets/images/home/slide_2.jpg",
                  "../assets/images/home/slide_3.jpg"
        ]
        },
        search: true,
        button: false,
        link: false,
      },
      {
        country: 'kenya',
        header: {
          height:"90vh",
          title: "Build hybrid, multicloud, cloud-to-cloud, and disaster recovery solutions ",
          content: "CSquared Cloud offers simplified access to and tailored consumption of multi-cloud services to businesses and social enterprises cost-effectively. Our solutions facilitate an enabling environment for digital transformation across Africa.",
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
          height:"90vh",
          title: "Join our amazing Network in the Basin",
          content: "Tsagaan Suvarga is an arduous scarp in Olziit soum of Dundgovi province. Once a floor of the ocean, this scarp looks like a white stupa, hence the name Tsagaan Suvarga (white stupa). This scarp is 400 meters long and 60 meters tall with a 90 degree brink. After a rain, the water pouring down the scarp makes it look like a huge waterfall.",
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




