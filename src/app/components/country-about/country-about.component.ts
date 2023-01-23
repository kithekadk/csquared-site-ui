import { Component, Input, OnInit } from '@angular/core';

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
  }

}
