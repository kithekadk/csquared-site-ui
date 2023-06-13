import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-kenya',
  templateUrl: './kenya.component.html',
  styleUrls: ['./kenya.component.css']
})
export class KenyaComponent implements OnInit {
  content=`
  Kenya’s internet penetration rate was at 29.1% in January 2022. As the country undergoes rapid digitization, efficient internet access will be a key enabler for increased socioeconomic growth. CSquared’s broadband network is helping increase internet access in Kenya.
CSquared in Kenya was launched in 2013 and has since set up more than 1000 KM Fiber network in Greater Kampala, connecting over 1300 base stations and buildings.

Partner with us to enhance your internet access and accelerate your productivity and growth. We understand the market dynamics and have the right products and solutions for your internet needs.
  `

image="https://cdn.pixabay.com/photo/2020/02/22/23/03/lion-4871786_640.jpg"

div1img='/assets/services/service-images/Cloudconnectivity(1).jpg'
// div11img='/kenya/cloud.png'
div1text=`
Take advantage of the Zero Trust Exchange platform and the largest security cloud on the planet, to make doing business and navigating change a simpler, faster, and more productive experience
`
div2img='/assets/services/service-images/SD-WAN.jpg'

div2text=`
Simplify management of your multisite WAN while enhancing user experience and optimising costs. Leverage broadband internet connectivity to reduce unnecessary MPLS traffic
`

div3img='https://media.istockphoto.com/id/1173891823/photo/fiber-optics-abstract-background-purple-blue-data-internet-technology-cable.jpg?b=1&s=170667a&w=0&k=20&c=k4xwqnkP0X-VxdBtx3HT8hadLwq2wybHrWtijHqUAjg='
div3text=`
Connect your digital ecosystem securely and on your own terms, using Csquared and one of the world’s leading Network-as-a-Service platforms
`
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {

    this.countryService.setCountry('kenya');
    AOS.init();
  }
  height:string='90vh';
}
