import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Countries } from 'src/app/interfaces/interfaces';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-header',
  templateUrl: './country-header.component.html',
  styleUrls: ['./country-header.component.css']
})
export class CountryHeaderComponent implements OnInit {

  code:string="" 
   countries!:Countries
   image="https://previews.123rf.com/images/fintastique/fintastique1009/fintastique100900041/7741880-business-people-on-uganda-map-flag-illustration.jpg"
   content=`
   Uganda’s internet penetration rate was at 29.1% in January 2022. As the country undergoes rapid digitization, efficient internet access will be a key enabler for increased socioeconomic growth. CSquared’s broadband network is helping increase internet access in Uganda.
CSquared in Uganda was launched in 2013 and has since set up more than 1000 KM Fiber network in Greater Kampala, connecting over 1300 base stations and buildings.
Partner with us to enhance your internet access and accelerate your productivity and growth. We understand the market dynamics and have the right products and solutions for your internet needs.
   `
  constructor( private route:ActivatedRoute ,private countryservice :CountryService) { }
 
  ngOnInit(): void {
    this.countryservice.setCountry$.subscribe(country_id=>{
      this.countries = this.countryservice.getOneCountry(country_id)
    })
    
  }

}
