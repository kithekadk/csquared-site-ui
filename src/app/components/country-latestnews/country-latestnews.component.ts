import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LatestNewsContent } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-country-latestnews',
  templateUrl: './country-latestnews.component.html',
  styleUrls: ['./country-latestnews.component.css']
})
export class CountryLatestnewsComponent implements OnInit {
  country=''
  newsSlugs:any[]=[]

  pageNumber:number=1

  news:any
  titles:any[]=[]
  descriptions:any[]=[]
  images:any[]=[]
  avatars:any[]=[]
  users:any[]=[]
  created_at:any[]=[]
  countries:any[]=[]
  mergedArray:any[]=[]
  mergedArray2:any[]=[]

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {
    this.country=this.router.url.replace('/country/','');
    console.log(this.country);

    // DRC SLUG IS NOT WELL SET IN THE BACKEND
    if(this.country == 'drc'){
      this.country = 'congo-democratic-republic-of-the'
    }
    // GETTING NEWS
    this.apiService.getNews().subscribe(res=>{
      res['data']
      console.log(res['data']);
      
      this.news=res['data']      
      
      for(let image of res['data']){
        
        let imageUrl=image.media?.pathUrls[0]
        if (imageUrl == null){
           let avatar = image.name[0]
           this.images.push(avatar)
        }else{
          this.images.push(imageUrl) 
        }
      }
      // Returns users and post creation date
      for(let users of res['data']){
        
        let user=users.user?.name
        let creation_date=users.user?.created_at        
        this.users.push(user)  
        this.created_at.push(new Date(creation_date).toDateString())  
      }

      // Returns content of the post
      for(let desc of res['data']){
        let title = desc.name
        let description=desc.description
        this.descriptions.push(description)          
        this.titles.push(title)          
      }

      // Returns news country
      for(let country of res['data']){
        let newsCountry=country.country['slug']
        this.countries.push(newsCountry)          
      }
      // Returns news slug for url purposes
      for(let news of res['data']){
        let slug=news.slug
        this.newsSlugs.push(slug)          
      }

      this.mergedArray = this.images.map((img, index) =>({
        image:img, title:this.titles[index], description: this.descriptions[index], country: this.countries[index], slug:this.newsSlugs[index]
      }))
      this.mergedArray2=this.mergedArray
      this.getNewsPerCountry()
      console.log('calling');
       
    })
      
  }

  getNewsPerCountry(){
    this.mergedArray2=this.mergedArray.filter(el=>el.country==this.country)
    console.log(this.mergedArray2);
  }

  getSlug(slug:string){
    console.log(slug);
    
  }

}
