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
      content:"ZPA applies the principles of least privilege to give users secure, direct connectivity to private applications running on-prem or in the public cloud while eliminating unauthorized access and lateral movement. ZPA is a cloud-native service built on a holistic security service edge (SSE)"
   },
   {  
    image:"https://www.icf-events.org/wp-content/uploads/2021/07/Ella-Jaczynska_Importance-of-the-3-new-Cs-%E2%80%94-connection-communication-and-clarity.jpeg",
     title:"CSquared Sets on ‘Fiberising’ Africa Affordably",
      content:"ZPA applies the principles of least privilege to give users secure, direct connectivity to private applications running on-prem or in the public cloud while eliminating unauthorized access and lateral movement. ZPA is a cloud-native service built on a holistic security service edge (SSE)"
   },
   {  
    image:"https://www.icf-events.org/wp-content/uploads/2021/07/Ella-Jaczynska_Importance-of-the-3-new-Cs-%E2%80%94-connection-communication-and-clarity.jpeg",
     title:"CSquared Sets on ‘Fiberising’ Africa Affordably",
      content:"ZPA applies the principles of least privilege to give users secure, direct connectivity to private applications running on-prem or in the public cloud while eliminating unauthorized access and lateral movement. ZPA is a cloud-native service built on a holistic security service edge (SSE)"
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
