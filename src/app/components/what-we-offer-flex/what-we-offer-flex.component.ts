import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-what-we-offer-flex',
  templateUrl: './what-we-offer-flex.component.html',
  styleUrls: ['./what-we-offer-flex.component.css']
})
export class WhatWeOfferFlexComponent implements OnInit {

  offers:Offer[]=[
  {
    image:"https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5bd1d0545fafd5371c069731_What-is-Dark-Fiber-1.jpg",
    title:"High Capacity Leased"
  },
   {
    image:"https://5g.co.uk/userfiles/images/Network/dark-fibre.jpg",
    title:"Dark Fiber Products"
  },
 {
    image:"https://www.fon.co.ke/images/channel/pic2.jpg",
    title:"Managed Ethernet"
  },
   {
    image:"https://www.atlantech.net/hubfs/Blog_images/Atlantech_point-to-point-fiber-optic-network.png",
    title:"Metro"
  }



  ]
  constructor() { }

  ngOnInit(): void {
  }

}
