import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.css']
})
export class SingleServiceComponent implements OnInit {
  fiberservices!:services
  cloudservices!:services
  Allfiberservices!:services[];
  Allcloudservices!:services[];
  constructor(private apiService:ApiService, private router:Router) { }

  id:string = this.router.url;
  index!:number 
  ngOnInit(): void {
    if(this.router.url.includes('/services/wholesale-fiber/view/')){
      this.getFiberServiceIndex();
      this.Allfiberservices=this.apiService.getFiberServices()
      
    }else if(this.router.url.includes('/services/cloud-solutions/view/')){
      this.getCloudServiceIndex();
      this.Allcloudservices=this.apiService.getCloudServices();
    }   
  }

  getFiberServiceIndex(){
    this.index = (Number(this.id.replace('/services/wholesale-fiber/view/','')));
    this.fiberservices = this.apiService.getOneFiberItem(this.index);
    this.image=this.fiberservices.image
    
  }
  getCloudServiceIndex(){
    this.index = (Number(this.id.replace('/services/cloud-solutions/view/','')));
    this.cloudservices = this.apiService.getOneCloudItem(this.index);
    this.image=this.cloudservices.image 
  }

  image=''
}
