import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categoryRoute!:string;



fiberservices!:services[];
cloudservices!:services[];
  constructor(private router:Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.categoryRoute=this.router.url;
    this.fiberservices=this.apiService.getFiberServices();
    // console.log(this.services);
    
    this.cloudservices=this.apiService.getCloudServices();
  }

  oneClouditem!:services;
  viewCloudProduct(index: number){
    this.oneClouditem=this.apiService.getOneCloudItem(index);
    console.log(this.oneClouditem);
  }

  oneFiberitem!:services;
  viewFiberProduct(index: number){
    this.oneFiberitem=this.apiService.getOneFiberItem(index);
  }

}
