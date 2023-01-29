import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-what-we-offer-flex',
  templateUrl: './what-we-offer-flex.component.html',
  styleUrls: ['./what-we-offer-flex.component.css']
})
export class WhatWeOfferFlexComponent implements OnInit {

  @Input() offers!:Offer[]

  selectedoffer!:Offer
  constructor() { }

  ngOnInit(): void {
  }

  popModal(index:number){
    console.log(index);
    this.selectedoffer= this.offers[index]
    
  }

}
