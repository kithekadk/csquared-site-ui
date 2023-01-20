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



services!:services[];
cloudservices!:services[];
  constructor(private router:Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.categoryRoute=this.router.url;
    this.services=this.apiService.getCloudServices();
    console.log(this.services);
    
    this.cloudservices=this.apiService.getFiberServices();
  }

  oneitem!:services
  viewProduct(index: number){
    this.oneitem=this.apiService.getOneItem(index);
    console.log(this.oneitem);
     
  }

}
