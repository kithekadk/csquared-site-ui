import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-one-impact',
  templateUrl: './view-one-impact.component.html',
  styleUrls: ['./view-one-impact.component.css']
})
export class ViewOneImpactComponent implements OnInit {
  slug!:string
  spinneroff:boolean =true
  impact:any[]=[]

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.slug=this.router.url.replace('/impact/','')
    this.apiService.getOneImpact(this.slug).subscribe(res=>{
      this.impact=res['data']
      this.spinneroff=false
    })
  }

}
