import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  targets: {title: string, image: string}[] = [
      {title:"MNO's", image:'/assets/images/home/MNO.jpg'},
      {title:'Data Centers', image:'/assets/images/home/country.png'},
      {title:'SMEs', image:'/assets/images/home/rolling_wire.jpg'},
      {title:'ISPs', image:'/assets/images/home/data_center.jpg'},
      {title:'Public - Point to Point Connection', image:'/assets/images/home/rolling_wire.jpg'},
      {title:'Cloud Centers', image:'/assets/images/home/country.png'},
    ]

    services: any[] = [
      {  
      'name': 'Cloud Services'  
       }, 
     {  
      'name': 'Network'  
     }, 
    {  
      'name': 'Wifi'  
    },
    {  
      'name': 'Cloud Security'  
   }
];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    AOS.init()
  }


}
