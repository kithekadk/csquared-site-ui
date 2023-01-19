import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  targets: {title: String, image: String}[] = [
      {title:'MNO\'s', image:'/assets/images/home/rolling-wire.png'},
      {title:'Data Centers', image:'/assets/images/home/country.png'},
      {title:'SMEs', image:'/assets/images/home/line-man.png'},
      {title:'ISPs', image:'/assets/images/home/isp.png'},
      {title:'Public - Point to Point Connection', image:'/assets/images/home/rolling-wire.png'},
      {title:'Cloud Centers', image:'/assets/images/home/servers.png'},
    ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


}
