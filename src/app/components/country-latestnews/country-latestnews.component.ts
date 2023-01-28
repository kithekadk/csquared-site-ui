import { Component, OnInit } from '@angular/core';
import { LatestNewsContent } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-country-latestnews',
  templateUrl: './country-latestnews.component.html',
  styleUrls: ['./country-latestnews.component.css']
})
export class CountryLatestnewsComponent implements OnInit {
  latestNews:LatestNewsContent[]=[
   {  
    image:"https://www.icf-events.org/wp-content/uploads/2021/07/Ella-Jaczynska_Importance-of-the-3-new-Cs-%E2%80%94-connection-communication-and-clarity.jpeg",
     title:"Google’s CSquared to enhance affordable broadband connectivity in Africa  ",
      content:"CSquared, a pan-African broadband infrastructure provider owned by Google and other partners, has said that…"
   },
   {  
    image:"https://www.icf-events.org/wp-content/uploads/2021/07/Ella-Jaczynska_Importance-of-the-3-new-Cs-%E2%80%94-connection-communication-and-clarity.jpeg",
     title:"CSquared Sets on ‘Fiberising’ Africa Affordably",
      content:"CSquared, a pan-african broadband infrastructure provider announced its plans of ‘Fiberising’ Africa through affordable broadband…"
   },
   {  
    image:"https://www.icf-events.org/wp-content/uploads/2021/07/Ella-Jaczynska_Importance-of-the-3-new-Cs-%E2%80%94-connection-communication-and-clarity.jpeg",
     title:"GRIDCo & CSquared Partner To Promote #FiberForAll",
      content:"Accra, April 19, 2021 – The GHANA GRID COMPANY LIMITED (GRIDCo) has today signed a partnership with CSQUARED"
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
