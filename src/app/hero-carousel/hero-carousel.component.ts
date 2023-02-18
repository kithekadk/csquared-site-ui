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
    "../assets/images/home/slide_1.jpg",
    "../assets/images/home/slide_2.jpg",
    "../assets/images/home/slide_3.jpg"


  ];
}
