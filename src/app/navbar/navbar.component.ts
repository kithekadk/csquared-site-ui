import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMegamenuOpen!:boolean;

  toggled: boolean = false;
  FromTop:any
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    // this.FromTop = window.scrollY + document.getElementById('overall-nav')!.getBoundingClientRect().top
    // if(this.FromTop <= 53){
    //   this.isMegamenuOpen=true
    //   console.log(this.FromTop);
    // }
    this.isMegamenuOpen=false
    

  } 

  toggleMegamenu() {
    this.isMegamenuOpen = !this.isMegamenuOpen;
    console.log(this.isMegamenuOpen);
  }

  // onMouseLeave(){
  //   this.isMegamenuOpen=false;
  // }

  selectedItem: {name:string,code:string, flag:string} | null = null
countries:{name:string,code:string,id:string, flag:string}[]=[
  {
    name :"Global",
    code:'hybrid',
    id:'',
    flag:'./../../assets/images/flags/earth-1681722__340.png'
  },
  {
    name :"Uganda",
    code:'uganda',
    id:'78c7d800-85ad-11eb-82e0-71c6f09a2bae',
    flag:'./../../assets/images/flags/Flag_of_Uganda.svg.png'
  },
  {
    name :"Kenya",
    code:'kenya',
    id:'78ba6f60-85ad-11eb-88f1-39b4763e914c',
    flag:'./../../assets/images/flags/255px-Flag_of_Kenya.svg.png'
  },
   {
    name :"Ghana",
    code:'ghana',
    id:'78b6b910-85ad-11eb-8c83-cd8b9be0f4f1',
    flag:'./../../assets/images/flags/255px-Flag_of_Ghana.svg.png'
  },
    {
    name :"DRC Congo",
    code:'drc',
    id:'78b32a20-85ad-11eb-8ef6-a9906fd1e035',
    flag:'./../../assets/images/flags/drc_flag.jpg'
  },
    {
    name :"Liberia",
    code:'liberia',
    id:'78bb1f20-85ad-11eb-9ca4-dfa9c20bb376',
    flag:'./../../assets/images/flags/Flag_of_Liberia.svg'
  },
   {
    name :"Togo",
    code:'togo',
    id:'78c68a50-85ad-11eb-813f-b19440c3cb6a',
    flag:'./../../assets/images/flags/Flag_of_Togo.svg.png'
  }
]


products:{name:string, code:string}[]=[{name:'Infrastructure',code:'-'},{name:'Fiber', code:'wholesale-fiber'},
{name:'Cloud Solutions', code: 'cloud-solutions'}]; 

services:{name:string, code:string}[]=[{name:'WholeSale Fiber', code:'wholesale-fiber'},
{name:'Cloud Solutions', code: 'cloud-solutions'}];

Aboutsubmenus:{name:string, code:string}[]=[{name: 'About',code:'about'},{name: 'Team',code:'team'},{name: 'Careers',code:'career'}];
  constructor(private router:Router, private elementRef:ElementRef) { }

navbarPosition= this.elementRef.nativeElement.querySelector('.navbar')
  ngOnInit(): void {     
  }
  toggle!:boolean
  view!:boolean

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
