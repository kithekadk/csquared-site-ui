import { Component, HostListener } from '@angular/core';
import {Link} from './definitions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'test-angular';
  links: Link[] = [
      { name:'home', route:'/'},
      { name:'coverage', route:'/coverage'},
      { name:'products', route:'/products'},
      { name:'services', route:'/services'},
      { name:'about', route:'/about'},
      { name:'blog', route:'/blog'},
    ]

}
