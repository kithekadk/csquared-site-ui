import { Component, OnInit } from '@angular/core';
import { CoverageContent } from '../interfaces/interfaces';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-togo',
  templateUrl: './togo.component.html',
  styleUrls: ['./togo.component.css']
})
export class TogoComponent implements OnInit {
 text=`
  CSquared is the only wholesale infrastructure provider with
   180+ Kms of metro fiber in Monrovia, providing services
    to all MNOs, ISPs and the Government of Liberia.

    CSquared Liberia entered into a tripartite partnership
     with the Government of Liberia and USAID to connect 51
      Government Institutions to high speed reliable networks.
       This partnership was created after the Ebola virus outbreak
        in Liberia and the need for infrastructure, digitization
         initiatives, and economic development in the capital 
         Monrovia was realized. CSquared and USAID Liberia also
          enterered into a new partnership to construct an open 
          access fiber backbone connecting Liberia, Ivory Coast 
          & Guinea.This partnership will establish a 350 km national 
          fiber backbone in Liberia, extending from the capital city
           Monrovia to Ivory Coast and Guinea borders, crossing more
            than 13 cities and reaching over one million Liberians.
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
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {

    this.countryService.setCountry('togo')
  }

}
