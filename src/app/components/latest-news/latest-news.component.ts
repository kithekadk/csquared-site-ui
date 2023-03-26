import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  constructor(private apiService:ApiService, private router:Router) { }
pageNumber:number=1
news:any
descriptions:any[]=[]
images:any[]=[]
users:any[]=[]
created_at:any[]=[]
countries:any[]=[]
mergedArray:any[]=[]

newscomponent!:boolean
  ngOnInit(): void {
        // GETTING NEWS
    this.apiService.getNews().subscribe(res=>{
      res['data']
      console.log(res['data']);
      
      this.news=res['data']      
      
      for(let image of res['data']){
        
        let imageUrl=image.media?.pathUrls[0]
        if (imageUrl == undefined){
          imageUrl='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
        }
        this.images.push(imageUrl)  
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
        
        let description=desc.description
        this.descriptions.push(description)          
      }

      // Returns news country
      for(let country of res['data']){
        
        let newsCountry=country.country['slug']
        this.countries.push(newsCountry)          
      }

      this.mergedArray = this.images.map((img, index) =>({
        image:img, created_at:this.created_at[index], description: this.descriptions[index], country: this.countries[index]
      }))

      console.log(this.mergedArray);
      


    })

    //CHECKING URL
    if(this.router.url.includes('insights')){
      this.newscomponent=true
    }
    
  }

}
