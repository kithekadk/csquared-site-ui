import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { Countries } from '../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css'],
})
export class HeroCarouselComponent implements OnInit {
   code:string="" 
   countries!:any
   height:string=''
  constructor(private route:ActivatedRoute ,private countryservice :CountryService) { }
  
  ngOnInit(): void {
    this.countryservice.setCountry$.subscribe(country_id=>{
      this.countries = this.countryservice.getOneCountry(country_id)
      console.log(this.countries);

      this.height=this.countries.header.height;
    })

    this.countryservice.getCountry('78c7d800-85ad-11eb-82e0-71c6f09a2bae').subscribe(val=>{
      console.log(val);
    })
  }  
}
