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
    window.onresize = () => this.toggle = window.innerWidth <= 600;
    if (window.screen.width <= 600) { 
      this.toggle = true;
      this.display = false;
    }else if(window.screen.width >= 601){
      this.toggle = false
      this.display= true
    }
  }
  toggle!:boolean
  display!:boolean

  setState(){
    if (window.screen.width <=600){
      this.toggle = false
    }
    this.toggle = true
  }
  undoState(){
    if (window.screen.width <=600){
    this.toggle= true
    }this.toggle= false
  }
  navigateTo(event :any){
     this.router.navigate(['country',event])
     setTimeout(() => {
       this.toggled = false
     }, 100)   
  }

  getService(event: any) {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML=='Our Services'){
      setTimeout(() => {
        this.router.navigate(['services', '-'])
      }, 200)
      
    }else if(event.target.innerHTML=='WholeSale Fiber'){  
      setTimeout(() => {
        this.router.navigate(['services', 'wholesale-fiber'])
      }, 200)    
    }else if(event.target.innerHTML=='Cloud Solutions'){
      setTimeout(() => {
        this.router.navigate(['services', 'cloud-solutions']) 
      }, 200)
    }else{
      console.log(event.target.innerHTML);
    }
  }
  getAbout(event: any) {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML=='About'){
      this.router.navigate(['/', 'about'])
    }else if(event.target.innerHTML=='Team'){      
      this.router.navigate(['/', 'team'])
    }else if(event.target.innerHTML=='Careers'){
      this.router.navigate(['/', 'career'])
    }else{
      console.log(event.target.innerHTML);
    }
  }
  

}
