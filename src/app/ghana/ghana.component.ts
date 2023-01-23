import { Component, OnInit } from '@angular/core';
import { Countries, CoverageContent } from '../interfaces/interfaces';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-ghana',
  templateUrl: './ghana.component.html',
  styleUrls: ['./ghana.component.css']
})
export class GhanaComponent implements OnInit {
  countries!:Countries
  text=`
  CSquared currently has 5 metros in Ghana – Accra, Tema, Kasoa,
  Kumasi, and Takoradi, 2nd biggest city with 1070+ kilometers
  of fiber and 1000+ customer sites. There are over 5000 Base 
  Transmission towers largely owned by ATC, Eaton & Helios. Nearly
  25% of all fiber-ready towers in Ghana are powered by CSquared.
  Designed for enterprise connections including registered Corporate
  and small to medium businesses.
  
  In Ghana, CSquared embarked on building its West Africa terrestrial
  backbone, starting with a partnership with the Ghana Grid Company 
  Limited (GRIDCo). GRIDCo is a body tasked with developing and promoting
  competition in Ghana’s bulk power market. This joint venture will 
  enable connections between major cities within Ghana and neighboring
  countries.
  
  There were close to 17 million internet users in Ghana in January
  2022, with the internet penetration rate standing at 53.0 per 
  cent of the total population at January 2022, up from 50 per 
  cent in the previous year. The key indicators for this are secure
  internet servers, fixed broadband subscriptions, secure internet 
  servers and mobile cellular subscriptions.
  `

  image='https://www.newframe.com/wp-content/uploads/2019/10/12Oct_Ghana_WIRES.jpg'
  content:CoverageContent[]=[
        {
          image:'../../assets/images/country/wifi.png',
          title:'More coverage',
          content:'We cover 13,000+ housesand businesses in our featured countries'
        },
         {
          image:'../../assets/images/country/people.png',
          title:'Less hassle',
          content:'One easy-to manage network. Easy to install and use.'
        },
         {
          image:'../../assets/images/country/high-speed.png',
          title:'Faster  Network',
          content:'Ozone pays claims in hours-not weeks so your people can rest easy'
        }
      ]
      
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    this.countries= this.countryService.getOneCountry('ghana')
  }

}
