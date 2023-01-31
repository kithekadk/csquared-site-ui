import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Offer } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-what-we-offer-flex',
  templateUrl: './what-we-offer-flex.component.html',
  styleUrls: ['./what-we-offer-flex.component.css']
})
export class WhatWeOfferFlexComponent implements OnInit {

  @Input() offers!:Offer[]

  selectedoffer:Offer={
    title:'',
    image:'',
    content:''
  }
  constructor() { }

  ngOnInit(): void {
    AOS.init
  }

  popModal(index:number){
    console.log(index);
    this.selectedoffer= this.offers[index]
  }

}
