import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-kenya',
  templateUrl: './kenya.component.html',
  styleUrls: ['./kenya.component.css']
})
export class KenyaComponent implements OnInit {
    div1img='https://www.highspeedinternet.com/app/uploads/2020/08/fiber-optic-internet.jpg'
    div1text=`
CSquared Cloud: Work securely anywhere and anytime through an efficient cloud network
Business Models are changing. Work dynamics are shifting. Future proof your business with Cloud and Cloud security.
Digital transformation is happening. People are increasingly doing remote work and working across geographies.
Intelligent technologies + cloud best practices= growth and productivity.
CSquared Cloud provides solid infrastructure that enables your digital transformation journey by providing a user journey that ensures fast and safe access to devices, apps and data across the organization.
Our Zero Trust model proactively covers security risks by verifying and protecting an organization’s entire digital infrastructure in real time.
Partner with us to enhance your digital transformation through efficient and secure cloud solutions.

    `
div2img='http://www.unionconnecticut.org/wp-content/uploads/2022/08/internet-1.jpg'

div2text=`
CSquared Cloud: Work securely anywhere and anytime through an efficient cloud network
Business Models are changing. Work dynamics are shifting. Future proof your business with Cloud and Cloud security.
Digital transformation is happening. People are increasingly doing remote work and working across geographies.
Intelligent technologies + cloud best practices= growth and productivity.
CSquared Cloud provides solid infrastructure that enables your digital transformation journey by providing a user journey that ensures fast and safe access to devices, apps and data across the organization.
Our Zero Trust model proactively covers security risks by verifying and protecting an organization’s entire digital infrastructure in real time.
Partner with us to enhance your digital transformation through efficient and secure cloud solutions.
`

div3img='https://cioafrica.co/wp-content/uploads/2022/03/servers.jpg'
div3text=`
CSquared Cloud: Work securely anywhere and anytime through an efficient cloud network
Business Models are changing. Work dynamics are shifting. Future proof your business with Cloud and Cloud security.
Digital transformation is happening. People are increasingly doing remote work and working across geographies.
Intelligent technologies + cloud best practices= growth and productivity.
CSquared Cloud provides solid infrastructure that enables your digital transformation journey by providing a user journey that ensures fast and safe access to devices, apps and data across the organization.
Our Zero Trust model proactively covers security risks by verifying and protecting an organization’s entire digital infrastructure in real time.
Partner with us to enhance your digital transformation through efficient and secure cloud solutions.
`
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {

    this.countryService.setCountry('kenya');
    AOS.init();
  }

}
