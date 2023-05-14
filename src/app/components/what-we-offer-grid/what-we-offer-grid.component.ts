import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-offer-grid',
  templateUrl: './what-we-offer-grid.component.html',
  styleUrls: ['./what-we-offer-grid.component.css']
})
export class WhatWeOfferGridComponent implements OnInit {
  image="https://v1fiber.com/wp-content/uploads/2020/01/V1-Fiber-Aerial-Fiber.jpg"
  imageTwo="https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png"
  imageThree="https://www.aceee.org/sites/default/files/images/smart-manufacturing_web_size.jpg"
  imageFour="https://www.atlantech.net/hubfs/Blog_images/Featured%20Images/ATL_Fiber-Optic-Install-Publishing%20%281%29.png"
  imageFive='https://cdn.shopify.com/s/files/1/1065/2228/files/Multicolour_African_print_head_wrap_1440x640.jpg?v=1613512891'
  imageSix="https://cdnopen.openworldlearning.org/how_many_residential_internet_cable_provider_in_montreal.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
