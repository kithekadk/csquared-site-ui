import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Offer } from '../interfaces/interfaces';
import { CountryService } from '../services/country.service';

AOS.init();

@Component({
  selector: 'app-uganda',
  templateUrl: './uganda.component.html',
  styleUrls: ['./uganda.component.css']
})
export class UgandaComponent implements OnInit {
  content=`
  Uganda’s internet penetration rate was at 29.1% in January 2022. As the country undergoes rapid digitization, efficient internet access will be a key enabler for increased socioeconomic growth. CSquared’s broadband network is helping increase internet access in Uganda.
CSquared in Uganda was launched in 2013 and has since set up more than 1000 KM Fiber network in Greater Kampala, connecting over 1300 base stations and buildings.

Partner with us to enhance your internet access and accelerate your productivity and growth. We understand the market dynamics and have the right products and solutions for your internet needs.
  `

  image="./../../../assets/Csquared/pexels-timothy-nkwasibwe-8365399.jpg"
  offers=[
  {
    image:"https://askleo.com/wp-content/uploads/2018/10/internet.jpg",
    title:"Impactful"
  
  },
   {
    image:"https://shoppingranch.com/wp-content/uploads/2019/01/Online-Computer.jpg",
    title:"Expansive"
  },
 {
    image:"https://img.freepik.com/premium-photo/fast-internet-connection-with-metaverse-technology-concept-hand-holding-smartphone-virtual-screen-internet-speed-measurement-internet-technology-concept-5g-hi-speed-internet-concept_29488-6991.jpg?w=2000",
    title:"Fast"
  },
   {
    image:"https://broadbandlibrary.com/wp-content/uploads/2018/11/shutterstock_594171068.800-800x445.jpg",
    title:"transformative"
  }
]

about_leran_more:string=`Uganda is undergoing rapid digitization. Stay ahead of the curve by connecting to CSquared’s broadband network. With a 1000 KM+ Fiber network in Greater Kampala, CSquared’s  solid and extensive network coverage is the right fit for your business needs. We have been here since 2013 and understand the market dynamics. 
Whether you are an MNO or ISP, we have developed the right products and solutions for your internet needs. Partner with us to enhance your internet access and accelerate your productivity and growth.`

 grids: {image:string, title:string, text:string}[]=[{image:"https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png", title:"Port fiber", text:"CSquared provides port fiber service targeted at SMEs. This service enables ISPs and MNOs to provide high-quality broadband at lower costs through shared infrastructure to any location. Port fiber is beneficial as it offers a reliable and resilient service, coupled with a variety of packages to suit businesses’ needs and a low latency solution built on end-to-end fiber infrastructure. "},{image:"https://www.aceee.org/sites/default/files/images/smart-manufacturing_web_size.jpg", title:"Leased capacity", text:"CSquared offers high-capacity solutions geared towards enterprises, ISPs and MNOs. Leased capacity is advantageous as it provides full redundancy, high capacity ranging from speeds of 100 Mbps to 10 Gbps complete with an extensive network coverage."},{image:"https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png", title:"Dark fiber", text:"Dark fiber solution is an unrestricted connectivity solution designed to connect MNO Base Transceiver Stations (BTS) and Point to Point connections to large enterprises. As a business owner dark fiber provides you with complete control of your network as well as allowing a virtually unlimited capacity expansion. Dark fiber also accords you the highest level of security as dark fiber solutions are 100% dedicated for your use only."},{image:'https://cdn.shopify.com/s/files/1/1065/2228/files/Multicolour_African_print_head_wrap_1440x640.jpg?v=1613512891', title:"Fiber To The Home", text:"CSquared offers wholesale FTTH services in Uganda. It has also expanded into the residential market, giving end users the freedom to choose a service provider of their choice using the same fiber connection. Users are also able to access large amounts of data at high speed."}];
  

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    AOS.init()

    this.countryService.setCountry('uganda')
  }

index:number=0;
  popModal($index: number){
    this.index = $index;
  }
  
  toggle:boolean=false;
  learnMoreBtntext:string="Learn More"
  AboutUsClick(){
    this.toggle=!this.toggle
  }
}
