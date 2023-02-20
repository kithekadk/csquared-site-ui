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


products:{name:string, code:string}[]=[{name:'Infrastructure',code:'-'},{name:'Fiber', code:'wholesale-fiber'},
{name:'Cloud Solutions', code: 'cloud-solutions'}]; 

services:{name:string, code:string}[]=[{name:'WholeSale Fiber', code:'wholesale-fiber'},
{name:'Cloud Solutions', code: 'cloud-solutions'}];

Aboutsubmenus:{name:string, code:string}[]=[{name: 'About',code:'about'},{name: 'Team',code:'team'},{name: 'Careers',code:'career'}];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toggle!:boolean
  view!:boolean

  hideMenu(){
    this.view=false;
  }
  viewProduct(index:number){
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['services/wholesale-fiber/view',index])
    })
  }
  viewService(index:number){
    const div2 = document.getElementById('mega-menu-dropdown2') as HTMLDivElement
    // div2.style.display="visible"
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['services/cloud-solutions/view/',index])
    })
    // div2.style.display="none"
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
}
