import { Component, OnInit } from '@angular/core';
import { Offer } from '../interfaces/interfaces';
import { CountryService } from '../services/country.service';

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
  offers:Offer[]=[
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


  imageTwo="https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png"
  imageThree="https://www.aceee.org/sites/default/files/images/smart-manufacturing_web_size.jpg"
  imageFour="https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png"
  imageFive='https://cdn.shopify.com/s/files/1/1065/2228/files/Multicolour_African_print_head_wrap_1440x640.jpg?v=1613512891'
  imageSix="https://cdnopen.openworldlearning.org/how_many_residential_internet_cable_provider_in_montreal.jpg"
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {

    this.countryService.setCountry('uganda')
  }


  popModal($div: string){
    
  }

}
