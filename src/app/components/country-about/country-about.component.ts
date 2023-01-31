import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-country-about',
  templateUrl: './country-about.component.html',
  styleUrls: ['./country-about.component.css']
})
export class CountryAboutComponent implements OnInit {
  @Input() image!:string 
  @Input() content!:string 
  @Input() show!:boolean

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
