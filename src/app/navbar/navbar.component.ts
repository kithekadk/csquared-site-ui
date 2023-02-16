import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggled: boolean = false;
  selectedItem: {name:string,code:string, flag:string} | null = null
countries:{name:string,code:string, flag:string}[]=[
  {
    name :"Global",
    code:'hybrid',
    flag:'./../../assets/images/flags/earth-1681722__340.png'
  },
  {
    name :"Uganda",
    code:'uganda',
    flag:'./../../assets/images/flags/Flag_of_Uganda.svg.png'
  },
  {
    name :"Kenya",
    code:'kenya',
    flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
  },
   {
    name :"Ghana",
    code:'ghana',
    flag:'./../../assets/images/flags/255px-Flag_of_Ghana.svg.png'
  },
    {
    name :"DRC Congo",
    code:'drc',
    flag:'./../../assets/images/flags/drc_flag.jpg'
  },
    {
    name :"Liberia",
    code:'liberia',
    flag:'./../../assets/images/flags/Flag_of_Liberia.svg'
  },
   {
    name :"Togo",
    code:'togo',
    flag:'./../../assets/images/flags/Flag_of_Togo.svg.png'
  }
]

services:{name:string, code:string}[]=[{name:'Our Services',code:'-'},{name:'WholeSale Fiber', code:'wholesale-fiber'},
{name:'Cloud Solutions', code: 'cloud-solutions'}];

Aboutsubmenus:{name:string, code:string}[]=[{name: 'About',code:'about'},{name: 'Team',code:'team'},{name: 'Careers',code:'career'}];
  constructor(private router:Router) { }

  ngOnInit(): void {
    window.onresize = () => this.view = window.innerWidth <= 768;
    if (window.screen.width <= 768) { 
      this.view = true;
    }else if(window.screen.width >= 769){
      this.view = false
    }
  }
  toggle!:boolean
  view!:boolean

  hideMenu(){
    this.view=false;
  }
  viewMobileMenu(){
    if(window.innerWidth <= 768){
      this.view = !this.view;
    } 
  }
  undoState(){
    if(window.innerWidth <= 768){
      this.view = !this.view;
    }    
  }
  navigateTo(event :any){
     this.router.navigate(['country',event])
     setTimeout(() => {
      if(window.innerWidth <= 768){
        this.view = !this.view;
      } 
       this.toggled = false
     }, 100)   
  }

  getService(event: any) {
    console.log(event.target.innerText);
    const variable = event.target.innerText
    console.log(variable);
    if (variable=='Our Services'){      
        this.router.navigate(['services', '-'])      
    }else if(event.target.innerText=='WholeSale Fiber'){  
      setTimeout(() => {
        this.router.navigate(['services', 'wholesale-fiber'])
      }, 200)    
    }else if(event.target.innerText == 'Cloud Solutions'){
      setTimeout(() => {
        this.router.navigate(['services', 'cloud-solutions']) 
      }, 200)
    }else{
      console.log(event.target.innerText);
    }
  }
  getAbout(event: any) {
    console.log(event.target.innerText);
    if (event.target.innerText=='About'){
      this.router.navigate(['/', 'about'])
    }else if(event.target.innerText=='Team'){      
      this.router.navigate(['/', 'team'])
    }else if(event.target.innerText=='Careers'){
      this.router.navigate(['/', 'career'])
    }else if(event.target.innerText=='Career Description'){
      this.router.navigate(['/', 'career-description'])
    }else{
      console.log(event.target.innerText);
    }
  }
}
