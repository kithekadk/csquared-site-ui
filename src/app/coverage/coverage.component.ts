import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {

  coverage:Array<object>=[{
    image: '../../assets/Csquared/nairobi.jpg',
    thumbImage: '../../assets/Csquared/nairobi.jpg',
    alt: 'Kenya',
    title: 'Kenya'
  }, {
    image: '../../assets/Csquared/pexels-timothy-nkwasibwe-8365399.jpg',
    thumbImage: '../../assets/Csquared/pexels-timothy-nkwasibwe-8365399.jpg',
    title: 'Uganda',
    alt: 'Uganda'
  }, {
    image: '../../assets/Csquared/pexels-asiama-junior-6567674.jpg',
    thumbImage: '../../assets/Csquared/pexels-asiama-junior-6567674.jpg',
    title: 'Ghana',
    alt: 'Ghana'
  }, {
    image: '../../assets/images/flags/drc_flag.jpg',
    thumbImage: '../../assets/images/flags/drc_flag.jpg',
    title: 'DRC',
    alt: 'DRC'
  }, {
    image: '../../assets/images/flags/Flag_of_Liberia.svg',
    thumbImage: '../../assets/images/flags/Flag_of_Liberia.svg',
    title: 'Liberia',
    alt: 'Liberia'
  },
  {
    image: '../../assets/images/flags/Flag_of_Togo.svg.png',
    thumbImage: '../../assets/images/flags/Flag_of_Togo.svg.png',
    title: 'Togo',
    alt: 'Togo'
  }]
  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

  images:string[]=['../../assets/Csquared/nairobi.jpg','../../assets/Csquared/pexels-timothy-nkwasibwe-8365399.jpg','../../assets/Csquared/pexels-asiama-junior-6567674.jpg']


}
