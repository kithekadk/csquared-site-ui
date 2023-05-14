import { Component, OnInit } from '@angular/core';
import { CoverageContent } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-country-coverage',
  templateUrl: './country-coverage.component.html',
  styleUrls: ['./country-coverage.component.css']
})
export class CountryCoverageComponent implements OnInit {
 content:CoverageContent[]=[
        {
          image:'../../assets/images/country/wifi.png',
          title:'More coverage',
          content:'We cover 13,000+ housesand businesses in our featured countries'
        },
         {
          image:'../../assets/images/country/people.png',
          title:'Less hassle',
          content:'One easy-to manage network. Easy to install and use.'
        },
         {
          image:'../../assets/images/country/high-speed.png',
          title:'Faster  Network',
          content:'Ozone pays claims in hours-not weeks so your people can rest easy'
        }
      ]
  constructor() { }

  ngOnInit(): void {
  }

}
