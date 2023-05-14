import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { Countries } from '../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css'],
})
export class HeroCarouselComponent implements OnInit {
   code:string=""
   country_name:string = ''//introduced to store the country name 
   countries!:any
   combinedArray :any []=[]

  //  The first 3 titles, descriptions and slug point to the global homepage

   pagetitles :string[]=['Hybrid, multi-cloud and cloud-to-cloud recovery solutions', 'A digital Africa', 'Super connectivity']

   countrypageDescription :string[]=[
    'CSquared Cloud enables cloud and digital transformation through our extensive cloud network connectivity and solutions across Africa.','We are bringing high-quality broadband to Africa’s major cities by investing in internet infrastructure and enabling  open access to local Internet Service Providers (ISPs) and mobile network operators (MNOs).','Our unique offering of reliable and high-speed connectivity and innovative digital services can unleash your business towards the digital future.' ]
    globalPageImages: string[]=[];
   countrypageImages :string[]=this.globalPageImages
   countryslug :string[]=['global','global','global']


   filteredArray :any[]=[]

   randomIndex1!:number
   randomIndex2!:number
   randomIndex3!:number

   height:string='70vh'
  constructor(private route:ActivatedRoute ,private countryservice :CountryService, private router:Router) { }
  
  ngOnInit(): void {
    this.countryservice.setCountry$.subscribe(country_id=>{
      this.country_name = this.router.url.replace('/country/','')
      this.country_name = country_id

      // this.countries = this.countryservice.getOneCountry(country_id)

      // console.log(this.countries);
      
      //this.height=this.countries.header.height;
    })

    this.countryservice.getCountryInfo().subscribe(res=>{
      for(let data of res['data']){
        
        let title = data.buttonName
        this.pagetitles.push(title);
        this.countrypageDescription.push(data.description);
        this.countrypageImages.push(data.media.pathUrls[0]);
        this.countryslug.push(data.country.slug)

        this.countryservice.countriesheader.filter (el => {
          el.header.title = this.pagetitles 
          el.header.image = this.countrypageImages
          el.header.content = this.countrypageDescription
          el.country = this.country_name
          
          // console.log(this.countryslug); 
        })
        
        this.combinedArray = this.pagetitles.map((title, index) =>({
          title:title, 
          image:this.countrypageImages[index], 
          description: this.countrypageDescription[index], 
          country: this.countryslug[index], 
          
        }))
      // THIS RANDOMLY PICKS THE IMAGES TO DISPLAY ON THE GLOBAL HOME PAGE
        this.randomIndex1 = Math.floor(Math.random() * this.combinedArray.length);
        this.randomIndex2 = Math.floor(Math.random() * this.combinedArray.length);
        this.randomIndex3 = Math.floor(Math.random() * this.combinedArray.length);


        this.filteredArray = this.combinedArray.filter((el)=> el.country == this.country_name )        
      }

      this.globalPageImages.push(this.combinedArray[this.randomIndex1]?.image, this.combinedArray[this.randomIndex2]?.image,this.combinedArray[this.randomIndex3]?.image) 
      console.log(this.globalPageImages);

    })
    

    this.countryservice.getCountry('78c7d800-85ad-11eb-82e0-71c6f09a2bae').subscribe(val=>{
      // console.log(val);
    })
  }  
}
