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
impactImages:any[]=[]
created_at:any[]=[]
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
      console.log(res['data']);
      // GETTING IMPACT IMAGES
      for(let image of res['data']){
        let img = image.media?.pathUrls[0]
        let avatar = image.name[0]
        if(img == null || undefined){
          this.impactImages.push(avatar)
        }else{
        this.impactImages.push(img)
        }                  
      }
      
      for(let title of res['data']){
        let titles = title.name
        let slug = title.slug
        let time = title.created_at
        this.created_at.push(new Date(time).toDateString())
        
        this.impactTitles.push(titles)
        this.impactSlugs.push(slug)

        this.mergedArray = this.impactTitles.map((title, index) =>({
          title:title, slug:this.impactSlugs[index], created_at:this.created_at[index], image:this.impactImages[index]
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
