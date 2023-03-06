import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LatestNewsContent } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-country-latestnews',
  templateUrl: './country-latestnews.component.html',
  styleUrls: ['./country-latestnews.component.css']
})
export class CountryLatestnewsComponent implements OnInit {
  country=''

  latestNews: LatestNewsContent[] = [
    {
      image: "https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588__340.jpg",
      title: "CSquared Ghana, in partnership with Teledata",
      content: "November 14, 2022 - Accra, Ghana The seaside community of Chokor, a suburb in Accra with a population of about …",
      country: "ghana"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/07/31/16/18/engineer-2558705__340.jpg",
      title: "GRIDCo & CSquared Partner To Promote #FiberForAll",
      content: "Accra, April 19, 2021 – The GHANA GRID COMPANY LIMITED (GRIDCo) has today signed a partnership with CSQUARED …",
      country: "ghana"
    },
    {
      image: "https://media.istockphoto.com/id/685306588/photo/modern-city-skyline-and-mesh-network-concept.jpg?b=1&s=170667a&w=0&k=20&c=XlUDqSW4mCKdDEmORzmTqOdMNGa_BO_ejBR9XNaIxaY=",
      title: "CSQUARED GHANA ENTERS INTO SALES PARTNERSHIP WITH ANGOLA",
      content: "Accra, Ghana 12 May 2022: Ghanaian Technology and broadband infrastructure company, CSquared Ghana…",
      country: "ghana"
    },

    {
      image: "https://media.istockphoto.com/id/1332221320/photo/an-underwater-electric-cable.jpg?b=1&s=170667a&w=0&k=20&c=bjJ3hZ1q-FhqyP0nuD7bqWY08-6hMDhKTXzAArztB3w=",
      title: "CSquared celebrates Connecting Africa",
      content: "In Togo, Société d’Infrastructures Numériques (SIN) and CSquared formed a joint-venture in a major digital infrastructure ...",
      country: "togo"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/10/13/16/41/television-2848153__340.jpg",
      title: "Togo Welcomes Google’s historic ‘Equiano’ Subsea Cable",
      content: "Société d’Infrastructures Numériques (SIN) and CSquared form a joint-venture in major digital infrastructure…",
      country: "togo"
    },
    {
      image: "https://www.icf-events.org/wp-content/uploads/2021/07/Ella-Jaczynska_Importance-of-the-3-new-Cs-%E2%80%94-connection-communication-and-clarity.jpeg",
      title: "AfricaCom TV Interview with CEO, CSquared",
      content: "Lanre Kolade, the newly appointed CEO of CSquared, discusses his plans to boost African connectivity...",
      country: "togo"
    },

    {
      image: "https://cdn.pixabay.com/photo/2018/08/26/18/45/server-3632935__340.jpg",
      title: "What you need to know about CSquared’s Home Fiber  ",
      content: "At least you should have heard a word or two about CSquared, that provides local Internet service providers (ISPs) and mobile operators access…",
      country: "kenya"
    },
    {
      image: "https://media.istockphoto.com/id/610780052/photo/group-of-african-children-using-laptop-kenya-east-africa.jpg?b=1&s=170667a&w=0&k=20&c=OG2qQXXs2CQwL4ZR3meAVJsZ9fYXwlGmvEhKWdENXSA=",
      title: "How to get connected to CSquared’s Fiber to home internet",
      content: "Optical Fiber has been used to carry network signals for a number of decades now, but has failed to break into the dugout as a prominent…",
      country: "kenya"
    },
    {
      image: "https://media.istockphoto.com/id/1017739380/photo/african-american-couple-at-laptop-give-high-five.jpg?b=1&s=170667a&w=0&k=20&c=BGzI9kCnoDutPZ6XkECEl5tsde0PbyZG65oNtRzx_xg=",
      title: "CSquared Sets on ‘Fiberising’ Africa Affordably",
      content: "CSquared, a pan-african broadband infrastructure provider announced its plans of ‘Fiberising’ Africa through affordable broadband…",
      country: "kenya"
    },

    {
      image: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg",
      title: "CSquared Home Fiber starts rolling out in select areas in Kampala",
      content: "Data bundles. We love them and we hate them too. We love data bundles because they give you quick and fast access to the internet on the go when…",
      country: "uganda"
    },
    {
      image: "https://www.icf-events.org/wp-content/uploads/2021/07/Ella-Jaczynska_Importance-of-the-3-new-Cs-%E2%80%94-connection-communication-and-clarity.jpeg",
      title: "Google now offering fast fiber optic internet to Uganda homes through CSquared",
      content: "In May 2017, Google and three other companies signed an agreement to invest in CSquared. Csquared is a broadband infrastructure company focused…",
      country: "uganda"
    },
    {
      image: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501__340.jpg",
      title: "CSquared continues to thrive as a social enabler for the digital age",
      content: "CSquared’s metro fibre capabilities and extensive Wi-Fi network continues to help local providers connect more seamlessly and broadly to the internet...",
      country: "uganda"
    },

    {
      image: "https://cdn.pixabay.com/photo/2017/07/31/16/18/engineer-2558705__340.jpg",
      title: "CSquared obtained national license from telecoms regulator to extend its fiber optic network",
      content: "Good News Liberia: CSquared obtained national license from telecoms regulator to extend its fiber optic network",
      country: "liberia"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/02/06/52/fibre-1562702__340.jpg",
      title: "CSquared envisions ‘Fiberising’ Africa through affordable broadband internet connectivity",
      content: "CSquared, a pan-african broadband infrastructure provider that enables ISPS and MNOs to provide high quality broadband…",
      country: "liberia"
    },
    {
      image: "https://cdn.pixabay.com/photo/2013/01/29/01/02/google-76522__340.png",
      title: "Google’s CSquared to enhance affordable broadband connectivity in Africa",
      content: "CSquared, a pan-African broadband infrastructure provider owned by Google and other partners, has said that one of its top priorities…",
      country: "liberia"
    },

    {
      image: "https://cdn.pixabay.com/photo/2015/11/05/09/52/touch-screen-1023966__340.jpg",
      title: "Google’s CSquared to enhance affordable broadband connectivity in Africa  ",
      content: "CSquared, a pan-African broadband infrastructure provider owned by Google and other partners, has said that…",
      country: "drc"
    },
    {
      image: "https://cdn.pixabay.com/photo/2018/05/23/10/40/smartphone-3423710__340.png",
      title: "CSquared Sets on ‘Fiberising’ Africa Affordably",
      content: "CSquared, a pan-african broadband infrastructure provider announced its plans of ‘Fiberising’ Africa through affordable broadband…",
      country: "drc"
    },
    {
      image: "https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456__340.jpg",
      title: "CSquared envisions ‘Fiberising’ Africa through affordable broadband internet connectivity",
      content: "CSquared, a pan-african broadband infrastructure provider that enables ISPS and MNOs to provide high quality broadband through",
      country: "drc"
    },
  ]
  newsPerCountry: LatestNewsContent[]=[]
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.country=this.router.url.replace('/country/','');
    this.getNewsPerCountry()    
  }

  getNewsPerCountry(){
    this.newsPerCountry=this.latestNews.filter(el=>el.country==this.country)
  }

}
