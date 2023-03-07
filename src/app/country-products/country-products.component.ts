import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../interfaces/interfaces';

@Component({
  selector: 'app-country-products',
  templateUrl: './country-products.component.html',
  styleUrls: ['./country-products.component.css']
})
export class CountryProductsComponent implements OnInit {

  @Input() offers!:Offer[]

  // selectedoffer:Offer={
  //   title:'',
  //   image:'',
  //   content:''
  // }

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url.includes('impact')){
      this.imageLoadForImpacts=true
    }
  }
  imageLoadForImpacts=false

}
