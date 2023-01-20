import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface services{
  image:string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categoryRoute!:string;

services: services[]= [{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600',title:'Dark Lite Fiber',description:'With out dark Fiber, You get Point-to-Point unmonitored Fiber connection tha has virtually unlimited capacity. The product allows you to bring your device to light up'},{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600',title:'Leased Capacity',description:'Leased capacity gives you a dedicated Fiber link that interconnects two or more sites/locations. Our robust metro-Fiber network ensures maximum uptime, allowing for high level efficiency and productivity. With our leased capacity, you will have a protected connection with a minimum of 100mbps dedicated capacity'}];

cloudservices: services[]= [{image:'https://media.istockphoto.com/id/943067460/photo/male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-theyre.jpg?b=1&s=612x612&w=0&k=20&c=20Z5WDTeidmPjbSBQee73woV4j3HE9atp8FJ9h8wFGE=',title:'Dark Lite Fiber',description:'With out dark Fiber, You get Point-to-Point unmonitored Fiber connection tha has virtually unlimited capacity. The product allows you to bring your device to light up'},{image:'https://media.istockphoto.com/id/943067460/photo/male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-theyre.jpg?b=1&s=612x612&w=0&k=20&c=20Z5WDTeidmPjbSBQee73woV4j3HE9atp8FJ9h8wFGE=',title:'Leased Capacity',description:'Leased capacity gives you a dedicated Fiber link that interconnects two or more sites/locations. Our robust metro-Fiber network ensures maximum uptime, allowing for high level efficiency and productivity. With our leased capacity, you will have a protected connection with a minimum of 100mbps dedicated capacity'}];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.categoryRoute=this.router.url;
  }

}
