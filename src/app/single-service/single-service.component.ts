import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { services } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';
import { CountryService } from '../services/country.service';

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
  form!:FormGroup
  constructor(private apiService:ApiService, private router:Router , private fb:FormBuilder, private countryservice:CountryService) { }

  id:string = this.router.url;
  index!:number 
  ngOnInit(): void {
    this.form = this.fb.group({
      country_id: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      subject: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
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

  view= false
  SubmitIssue(){
    if(this.form){
      console.log(this.form.value);
      this.countryservice.contactCsquared(this.form.value).subscribe(res=>{
        console.log(res);   
        this.form.reset();
        this.view=true; 
        setTimeout(() => {
          this.view=false;
        }, 3000);    
      })
    }
  }
}
