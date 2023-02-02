import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
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
active:boolean=false;
  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    if (this.router.url == '/about'){
      this.getSections();
    }else if(this.router.url == '/team'){
      this.getManagers();
    } 
    Aos.init();
  }

  getSections(){
    this.sections=this.apiService.getAboutSection();
    this.active=true
  }

  getManagers(){
    this.managers = this.apiService.getManagement();
    console.log(this.managers);
  }

  teamMember!: authorities;
  viewTeamMember(index:number){
    this.teamMember=this.apiService.getTeamMember(index);
  }

}
