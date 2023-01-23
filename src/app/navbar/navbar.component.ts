import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
countries:{name:string,code:string}[]=[
  {
    name :"Select Country",
    code:'hybrid'
  },
  {
    name :"Uganda",
    code:'uganda'
  },
  {
    name :"Kenya",
    code:'kenya'
  },
   {
    name :"Ghana",
    code:'ghana'
  },
    {
    name :"DRC Congo",
    code:'drc'
  },
    {
    name :"Liberia",
    code:'liberia'
  },
   {
    name :"Togo",
    code:'togo'
  }
]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  navigateTo(event :any){
    this.router.navigate(['country',event.target.value])
    // console.log(event.target.value);
    
  }

  
}
