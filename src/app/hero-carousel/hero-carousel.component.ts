import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css'],
})
export class HeroCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    "https://askleo.com/wp-content/uploads/2018/10/internet.jpg",

    "https://media-cldnry.s-nbcnews.com/image/upload/msnbc/2015_36/384421/ap_972523734581.jpg",

    "https://media-cldnry.s-nbcnews.com/image/upload/msnbc/2015_36/384421/ap_972523734581.jpg"

  ];
}
