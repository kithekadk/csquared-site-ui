import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css']
})
export class ImpactComponent implements OnInit {
  constructor(private apiservice:ApiService) { }
  pageNumber:number=1
  spinneroff=true

  impactImages:any[]=[]
  impactTitle:any[]=[]
  impactDescription:any[]=[]
  impactCategory:any[]=[]
  impactSlug:any[]=[]
  mergedArray:any[]=[]
  mergedArray2:any[]=[]

  ngOnInit(): void {
    this.apiservice.getImpacts().subscribe(res=>{
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

      // GETTING IMPACT TITLES
      for(let title of res['data']){
        let titles = title.name
        // console.log(titles);
        this.impactTitle.push(titles)
      }

      // GETTING IMPACT DESCRIPTION
      for(let desc of res['data']){
        let descriptions = desc.description
        // console.log(descriptions);
        this.impactDescription.push(descriptions)
      }

      // IMPACT CATEGORIES
      for(let cat of res['data']){
        let slug = cat.slug
        let category = cat.impact_type['name']
        this.impactSlug.push(slug)
        this.impactCategory.push(category)
      }
      
      this.mergedArray = this.impactImages.map((img, index) =>({
        image:img, title:this.impactTitle[index], description: this.impactDescription[index], category: this.impactCategory[index], impactSlug: this.impactSlug[index]
      }), this.spinneroff=false)
      this.mergedArray2 = this.mergedArray
      // console.log(this.mergedArray2);
    })
  }

  filterCategory(category:string) {
    this.mergedArray = this.mergedArray2.filter(el=>category===''?true:el.category === category || el.category==='')
    // console.log(this.mergedArray);
    return this.mergedArray
  } 

  getIndex(slug:string){
    console.log(slug); 
  }
}