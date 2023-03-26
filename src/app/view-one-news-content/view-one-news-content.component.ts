import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-one-news-content',
  templateUrl: './view-one-news-content.component.html',
  styleUrls: ['./view-one-news-content.component.css']
})
export class ViewOneNewsContentComponent implements OnInit {
slug=''
news:any[]=[]
spinneroff=true
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {
    this.slug=this.router.url.replace('/post/','')
    this.apiService.getOneNewsContent(this.slug).subscribe(res=>{
      this.news=res['data']

      this.spinneroff=false
    })
  }

}
