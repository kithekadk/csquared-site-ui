import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { services } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cloudservices:services[]= [{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600',title:'Dark Lite Fiber',description:'With out dark Fiber, You get Point-to-Point unmonitored Fiber connection tha has virtually unlimited capacity. The product allows you to bring your device to light up'},{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600',title:'Leased Capacity',description:'Leased capacity gives you a dedicated Fiber link that interconnects two or more sites/locations. Our robust metro-Fiber network ensures maximum uptime, allowing for high level efficiency and productivity. With our leased capacity, you will have a protected connection with a minimum of 100mbps dedicated capacity'}];

  services: services[]= [{image:'https://media.istockphoto.com/id/943067460/photo/male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-theyre.jpg?b=1&s=612x612&w=0&k=20&c=20Z5WDTeidmPjbSBQee73woV4j3HE9atp8FJ9h8wFGE=',title:'Cloud Security',description:"In partnership with Zscaler, the world's largest security cloud, we are enabling enterprises across Africa to secure digital transformation by leveraging a zero trust strategy. Zscaler delivers zero trust through the Zero Trust Exchange - an intergrated, cloud native platform that securely connects users, workloads, and devices to applications without connecting to the network. This unique approach eliminates the attack surface, prevents lateral threat movement, and protects against compromise and data loss. This is available across all our markets of operation."},{image:'https://media.istockphoto.com/id/943067460/photo/male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-theyre.jpg?b=1&s=612x612&w=0&k=20&c=20Z5WDTeidmPjbSBQee73woV4j3HE9atp8FJ9h8wFGE=',title:'Leased Capacity',description:'Leased capacity gives you a dedicated Fiber link that interconnects two or more sites/locations. Our robust metro-Fiber network ensures maximum uptime, allowing for high level efficiency and productivity. With our leased capacity, you will have a protected connection with a minimum of 100mbps dedicated capacity'}];
  constructor(private http:HttpClient) { }

  getFiberServices(){
    return this.services;
  }

  getCloudServices(){
    return this.cloudservices;
  }

  getOneItem(index:number){
    return this.services[index];
  }
}
