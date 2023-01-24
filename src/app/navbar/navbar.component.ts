import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
countries:{name:string,code:string, flag:string}[]=[
  {
    name :"Global",
    code:'hybrid',
    flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
  },
  {
    name :"Uganda",
    code:'uganda',
    flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
  },
  {
    name :"Kenya",
    code:'kenya',
    flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
  },
   {
    name :"Ghana",
    code:'ghana',
    flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
  },
    {
    name :"DRC Congo",
    code:'drc',
    flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
  },
    {
    name :"Liberia",
    code:'liberia',
    flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
  },
   {
    name :"Togo",
    code:'togo',
    flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
  }
]

services:{name:string, code:string}[]=[{name:'Services',code:'-'},{name:'WholeSale Fiber', code:'wholesale-fiber'},
{name:'Cloud Solutions', code: 'cloud-solutions'}];

Aboutsubmenus:{name:string, code:string}[]=[{name: 'About',code:'about'},{name: 'Team',code:'team'}];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  navigateTo(event :any){
    this.router.navigate(['country',event.target.value])
  }

  redirectServices(event: any){
    this.router.navigate(['services', event.target.value])
  }

  redirectAbout(event:any){
    this.router.navigate(['/' ,event.target.value])
  }
  
}
