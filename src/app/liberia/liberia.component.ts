import { Component, OnInit } from '@angular/core';
import { CoverageContent, Offer } from '../interfaces/interfaces';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-liberia',
  templateUrl: './liberia.component.html',
  styleUrls: ['./liberia.component.css']
})
export class LiberiaComponent implements OnInit {
  text=`
  CSquared is the only wholesale infrastructure provider with 180+ Kms of metro 
  fiber in Monrovia, providing services to all MNOs, ISPs and the Government of Liberia.
  CSquared Liberia entered into a tripartite partnership with the Government 
  of Liberia and USAID to connect 51 Government Institutions to high speed 
  reliable networks. This partnership was created after the Ebola virus 
  outbreak in Liberia and the need for infrastructure, digitization 
  initiatives, and economic development in the capital Monrovia was
  realized. CSquared and USAID Liberia also enterered into a new
  partnership to construct an open access fiber backbone connecting
  Liberia, Ivory Coast & Guinea.This partnership will establish a
  350 km national fiber backbone in Liberia, extending from the capital 
  city Monrovia to Ivory Coast and Guinea borders, crossing more than 13 
  cities and reaching over one million Liberians.
  `

  image='https://media-cldnry.s-nbcnews.com/image/upload/msnbc/2015_36/384421/ap_972523734581.jpg'

   content:CoverageContent[]=[
        {
          image:'../../assets/images/country/wifi.png',
          title:'More coverage',
          content:`
          We cover 13,000+ housesand businesses in our featured countries.
           We have seen how connecting metros in Africa to existing long-distance 
           fiber lines has helped to provide these cities .
          `
        },
         {
          image:'../../assets/images/country/people.png',
          title:'Less hassle',
          content:`
          One easy-to manage network. Easy to install and use. 
          We have seen how connecting metros in Africa to existing 
          long-distance fiber lines has helped to provide these cities .
          `
        },
         {
          image:'../../assets/images/country/high-speed.png',
          title:'Faster  Network',
          content:`
          Ozone pays claims in hours-not weeks so your people can
          rest easy. We have seen how connecting metros in Africa
          to existing long-distance fiber lines has helped to
          provide these cities .
          `
        }
      ]

  offer:Offer[]=[
  {
    image:"https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5bd1d0545fafd5371c069731_What-is-Dark-Fiber-1.jpg",
    title:"High Capacity Leased",
    content:'Designed for MNOs to connect to their base station'
  },
   {
    image:"https://5g.co.uk/userfiles/images/Network/dark-fibre.jpg",
    title:"Dark Fiber Products",
    content:'Designed for MNOs to connect to their base stations'
  },
 {
    image:"https://www.fon.co.ke/images/channel/pic2.jpg",
    title:"Managed Ethernet",
    content:'Designed for enterprise connections including small to medium businesses. '
  },
   {
    image:"https://www.atlantech.net/hubfs/Blog_images/Atlantech_point-to-point-fiber-optic-network.png",
    title:"Metro",
    content:'Enables Mobile Network Operators to connect their base stations and provide high-quality broadband at lower costs through shared infrastructure to any location. '
  }
  ]
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    this.countryService.setCountry('liberia')
  }

}
