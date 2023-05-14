import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Countries, CoverageContent, Offer } from '../interfaces/interfaces';
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
      
      offers:{title:string, image:string,text:string}[]=[
        {
          image:"https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5bd1d0545fafd5371c069731_What-is-Dark-Fiber-1.jpg",
          title:"FTTX",
          text:"Our shared infrastructure is designed to enable ISPs and MNOs to provide high-quality broadband to enterprises, SMEs and homes  at lower costs to any location."
        },
         {
          image:"https://5g.co.uk/userfiles/images/Network/dark-fibre.jpg",
          title:"Backbone",
          text:"With a 99.15% core reliability, with redundancy and a managed ethernet and leased capacity provisioning, our backbone products are all leased capacity circuits delivered over DWDM and IP/MPLS networks. Our backbone ensures that you have stable and resilient network connectivity, with full network control and comprehensive performance monitoring."
        },
       {
          image:"https://cdn.pixabay.com/photo/2016/01/23/11/31/ethernet-1157280_640.jpg",
          title:"Managed Ethernet",
          text:"Designed for enterprises, MNOs and ISPs, this wholesale service by CSquared provides dedicated point to point high quality and guaranteed bandwidth connections. Users get access to high-speed internet connectivity and excellent support service from our network of experienced network engineers. Our managed ethernet comes with a high level of redundancy to ensure high reliability."
        },
         {
          image:"https://www.atlantech.net/hubfs/Blog_images/Atlantech_point-to-point-fiber-optic-network.png",
          title:"Metro",
          text:"Our Metro is designed to connect more people to the Internet. With our wholesale open-access fiber-optic networks in Accra, Tema, Kasoa, Kumasi & Takoradi, ISP’s and MNOs can use our managed services by connecting access sites to customer handover points."
        }]

        
  offer:Offer[]=[
        {
          image:"https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5bd1d0545fafd5371c069731_What-is-Dark-Fiber-1.jpg",
          title:"FTTX",
          content:"Our shared infrastructure is designed to enable ISPs and MNOs to provide high-quality broadband to enterprises, SMEs and homes  at lower costs to any location."
        },
         {
          image:"https://5g.co.uk/userfiles/images/Network/dark-fibre.jpg",
          title:"Backbone",
          content:"With a 99.15% core reliability, with redundancy and a managed ethernet and leased capacity provisioning, our backbone products are all leased capacity circuits delivered over DWDM and IP/MPLS networks. Our backbone ensures that you have stable and resilient network connectivity, with full network control and comprehensive performance monitoring."
        },
       {
          image:"https://cdn.pixabay.com/photo/2016/01/23/11/31/ethernet-1157280_640.jpg",
          title:"Managed Ethernet",
          content:"Designed for enterprises, MNOs and ISPs, this wholesale service by CSquared provides dedicated point to point high quality and guaranteed bandwidth connections. Users get access to high-speed internet connectivity and excellent support service from our network of experienced network engineers. Our managed ethernet comes with a high level of redundancy to ensure high reliability."
        },
         {
          image:"https://www.atlantech.net/hubfs/Blog_images/Atlantech_point-to-point-fiber-optic-network.png",
          title:"Metro",
          content:"Our Metro is designed to connect more people to the Internet. With our wholesale open-access fiber-optic networks in Accra, Tema, Kasoa, Kumasi & Takoradi, ISP’s and MNOs can use our managed services by connecting access sites to customer handover points."
        }]

        about_learn_more:string=`Designed for enterprise connections including registered Corporate and small to medium businesses, CSquared currently has 5 metros in Ghana with 1070 KM+ of fiber and 1000+ customer sites.
        CSquared has embarked on building its West Africa terrestrial backbone in Ghana. We have a partnership with the Ghana Grid Company Limited (GRIDCo) which enables us  to connect major cities within Ghana and neighboring countries. 
        Whether you are an MNO or ISP, we have developed the right products and solutions for your internet needs. Partner with us to enhance your internet access and accelerate your productivity and growth.`
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    AOS.init();
    this.countryService.setCountry('ghana')
    this.countries= this.countryService.getOneCountry('ghana')
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
