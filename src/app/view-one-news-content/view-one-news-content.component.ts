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
pageNumber=1
news:any[]=[]

impactTitles:any[]=[]
impactSlugs:any[]=[]
mergedArray:any[]=[]


spinneroff=true
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {
    this.slug=this.router.url.replace('/post/','')
    this.apiService.getOneNewsContent(this.slug).subscribe(res=>{
      this.news=res['data']

      this.spinneroff=false
    })

    this.apiService.getNews().subscribe(res=>{
      for(let title of res['data']){
        let titles = title.name
        let slug = title.slug
        console.log(slug);
        this.impactTitles.push(titles)
        this.impactSlugs.push(slug)

        this.mergedArray = this.impactTitles.map((title, index) =>({
          title:title, slug:this.impactSlugs[index]
        }),this.spinneroff=false)
      }
    })
  }

  navigateToNewNews(slug:string){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['post', slug])
    })
  }

}
