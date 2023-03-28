import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-one-impact',
  templateUrl: './view-one-impact.component.html',
  styleUrls: ['./view-one-impact.component.css']
})
export class ViewOneImpactComponent implements OnInit {
  pageNumber=1
  slug!:string
  spinneroff:boolean =true
  impact:any[]=[]


  impactTitles:any[]=[]
  impactSlugs:any[]=[]
  mergedArray:any[]=[]

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.slug=this.router.url.replace('/impact/','')
    // Get one impact
    this.apiService.getOneImpact(this.slug).subscribe(res=>{
      this.impact=res['data']
      this.spinneroff=false
    })

    // GET MORE NEWS
    this.apiService.getImpacts().subscribe(res=>{
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
      this.router.navigate(['impact', slug])
    })
  }

}
