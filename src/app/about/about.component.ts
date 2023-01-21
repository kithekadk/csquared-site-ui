import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authorities, services } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
sections!: services[];
managers!: authorities[];
  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.router.url)
    if (this.router.url == '/about'){
      this.getSections();
    }else if(this.router.url == '/team'){
      this.getManagers();
    } 
  }

  getSections(){
    this.sections=this.apiService.getAboutSection();
  }

  getManagers(){
    this.managers = this.apiService.getManagement();
  }


}
