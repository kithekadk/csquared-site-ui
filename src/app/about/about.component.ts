import { Component, OnInit } from '@angular/core';
import { services } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
sections!: services[]
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getSections();
  }

  getSections(){
    this.sections=this.apiService.getAboutSection();
  }

}
