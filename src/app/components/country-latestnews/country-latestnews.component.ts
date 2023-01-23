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
     title:"CSquared Sets on ‘Fiberising’ Africa Affordably",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..."
   },
   {  
    image:"https://www.icf-events.org/wp-content/uploads/2021/07/Ella-Jaczynska_Importance-of-the-3-new-Cs-%E2%80%94-connection-communication-and-clarity.jpeg",
     title:"CSquared Sets on ‘Fiberising’ Africa Affordably",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..."
   },
   {  
    image:"https://www.icf-events.org/wp-content/uploads/2021/07/Ella-Jaczynska_Importance-of-the-3-new-Cs-%E2%80%94-connection-communication-and-clarity.jpeg",
     title:"CSquared Sets on ‘Fiberising’ Africa Affordably",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..."
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
