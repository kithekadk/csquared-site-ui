import { Component, OnInit } from '@angular/core'
import { CountryService } from 'src/app/services/country.service'

@Component({
  selector: 'app-drc',
  templateUrl: './drc.component.html',
  styleUrls: ['./drc.component.css'],
})
export class DRCComponent implements OnInit {
  countryContent = `
  CSquared acquired its Democratic Republic of Congo National licenses and officially started
   operating in the country in September, 2021. Csquared has acquired the National licenses
    to allow it to deploy, own and operate Metro fiber, FTTx and Long Haul networks in all
     regions of DRC. Csquared DRC has very recently acquired an existing fiber infrastructure 
     assets in the DRC spanning approximately 100km of optic fiber around the major areas of 
     Kinshasa with enough free ducts to accommodate for future expansions.

  In the Democratic Republic of Congo (DRC), CSquared now operates 100km of fiber
   in Kinshasa with Africell as anchor customer. An MoU with Société Congolaises des 
   Postes et Télécommunications (SCPT) will land the country's 2nd Submarine cable 
   and enhance the National fiber backbone network.
  `

  grids: {image:string, title:string, content:string}[]=[{image:"https://v1fiber.com/wp-content/uploads/2020/01/V1-Fiber-Aerial-Fiber.jpg", title:"Port fiber", content:"CSquared provides port fiber service targeted at SMEs. This service enables ISPs and MNOs to provide high-quality broadband at lower costs through shared infrastructure to any location. Port fiber is beneficial as it offers a reliable and resilient service, coupled with a variety of packages to suit businesses’ needs and a low latency solution built on end-to-end fiber infrastructure. "},{image:"https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png", title:"Leased capacity", content:"CSquared offers high-capacity solutions geared towards enterprises, ISPs and MNOs. Leased capacity is advantageous as it provides full redundancy, high capacity ranging from speeds of 100 Mbps to 10 Gbps complete with an extensive network coverage."},{image:"https://www.aceee.org/sites/default/files/images/smart-manufacturing_web_size.jpg", title:"Dark fiber", content:"Dark fiber solution is an unrestricted connectivity solution designed to connect MNO Base Transceiver Stations (BTS) and Point to Point connections to large enterprises. As a business owner dark fiber provides you with complete control of your network as well as allowing a virtually unlimited capacity expansion. Dark fiber also accords you the highest level of security as dark fiber solutions are 100% dedicated for your use only."},{image:'https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png', title:"Fiber To The Home", content:"CSquared offers wholesale FTTH services in Uganda. It has also expanded into the residential market, giving end users the freedom to choose a service provider of their choice using the same fiber connection. Users are also able to access large amounts of data at high speed."}];

  image="./assets/images/CountryImages/DRCSeashore.jpg"
  imageTwo="https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png"
  imageThree="https://www.aceee.org/sites/default/files/images/smart-manufacturing_web_size.jpg"
  imageFour="https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png"
  imageFive='https://cdn.shopify.com/s/files/1/1065/2228/files/Multicolour_African_print_head_wrap_1440x640.jpg?v=1613512891'
  imageSix="https://cdnopen.openworldlearning.org/how_many_residential_internet_cable_provider_in_montreal.jpg"

  // image="https://lovehomedesigns.com/wp-content/uploads/2022/01/cute-house-012522.jpg.webp"

  about_learn_more:string=`Uganda is undergoing rapid digitization. Stay ahead of the curve by connecting to CSquared’s broadband network. With a 1000 KM+ Fiber network in Greater Kampala, CSquared’s  solid and extensive network coverage is the right fit for your business needs. We have been here since 2013 and understand the market dynamics. 
  Whether you are an MNO or ISP, we have developed the right products and solutions for your internet needs. Partner with us to enhance your internet access and accelerate your productivity and growth.`
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.setCountry('congo-democratic-republic-of-the')
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
