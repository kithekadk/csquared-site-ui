import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { services } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  fiberservices:services[]= [{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600',title:'Dark Lite Fiber',description:'With out dark Fiber, You get Point-to-Point unmonitored Fiber connection tha has virtually unlimited capacity. The product allows you to bring your device to light up'},{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600',title:'Leased Capacity',description:'Leased capacity gives you a dedicated Fiber link that interconnects two or more sites/locations. Our robust metro-Fiber network ensures maximum uptime, allowing for high level efficiency and productivity. With our leased capacity, you will have a protected connection with a minimum of 100mbps dedicated capacity'},{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Port Fiber', description:'Our port Fiber solution gives you access to a discounted dedicated Fiber link that interconnects two or more sites/locations. Designed to give you efficient service to low capacity users at an affordable rate, CSquared deploys and maintains the link for you.'},{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Data Center Connectivity', description:'We provide you with connectivity to all Data Centers within our respective coverage areas. Our cross connection services are built to help you with: Traffic Flow Management , Disaster Recovery , Latency Reduction, Global Networking'},{image:'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600', title:'FTTH', description:'Be it for work, business or leisure, our Fiber to the home solution gives you high quality internet at home with reliable speeds. Leverage on our strong network to carry out your internet activities seemlessly'}];

  cloudservices: services[]= [{image:'https://media.istockphoto.com/id/943067460/photo/male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-theyre.jpg?b=1&s=612x612&w=0&k=20&c=20Z5WDTeidmPjbSBQee73woV4j3HE9atp8FJ9h8wFGE=',title:'Cloud Security',description:"In partnership with Zscaler, the world's largest security cloud, we are enabling enterprises across Africa to secure digital transformation by leveraging a zero trust strategy. Zscaler delivers zero trust through the Zero Trust Exchange - an intergrated, cloud native platform that securely connects users, workloads, and devices to applications without connecting to the network. This unique approach eliminates the attack surface, prevents lateral threat movement, and protects against compromise and data loss. This is available across all our markets of operation."},{image:'https://media.istockphoto.com/id/943067460/photo/male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-theyre.jpg?b=1&s=612x612&w=0&k=20&c=20Z5WDTeidmPjbSBQee73woV4j3HE9atp8FJ9h8wFGE=',title:'SD-WAN',description:'Our cloud-based Software  Defined-WAN product will enable organizations with geographically distributed locations to securely break out to the public cloud, reducing their WAN costs, improving applications availability and performance and simplyfying management. We ensure that your network is safe and reliable. Currently available in Kenya and Uganda'},{image:'https://media.istockphoto.com/id/943067460/photo/male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-theyre.jpg?b=1&s=612x612&w=0&k=20&c=20Z5WDTeidmPjbSBQee73woV4j3HE9atp8FJ9h8wFGE=', title:'Edge Cloud', description:`Enable enterprises to leverage a computing platform for processing and storage of data as close to the source as possible leveraging our edge infrastructure for cases such as low latency, sta asovereignty that depends on location of compute and storage. Available in Kenya and Uganda from Mid 2023`},{image:'https://media.istockphoto.com/id/943067460/photo/male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-theyre.jpg?b=1&s=612x612&w=0&k=20&c=20Z5WDTeidmPjbSBQee73woV4j3HE9atp8FJ9h8wFGE=', title:'Data Center Interconnect', description:'This connectivity-as-a-service offering will allow enterprises and wholesalers of connectivity services to consume connectivity between data centers across Africa on demand basis similar to how cloud compute and storage services are consumed. Available in Kenya and uganda from Mid 2023.'},{image:'https://media.istockphoto.com/id/943067460/photo/male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-theyre.jpg?b=1&s=612x612&w=0&k=20&c=20Z5WDTeidmPjbSBQee73woV4j3HE9atp8FJ9h8wFGE=', title:'Direct On-ramp', description:'This facilitates low-latencty and secure dedicated connections that enable seamless movements of workloads between private and public clouds environments. The product is designed as a hosted service where CSquared will build direct cross-connections to the public cloud providers (Azure, AWS, Google Cloud) at their edge locations. Available in Kenya and Ugand from Mid 2023.'}];
  constructor(private http:HttpClient) { }

  getFiberServices(){
    return this.fiberservices;
  }

  getCloudServices(){
    return this.cloudservices;
  }

  getOneCloudItem(index:number){
    return this.cloudservices[index];
  }

  getOneFiberItem(index:number){
    return this.fiberservices[index];
  }
}
