import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../interfaces/interfaces';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css']
})
export class ImpactComponent implements OnInit {
  @Input() offers!:Offer[]
  constructor() { }

  ngOnInit(): void {

  }

  offer:Offer[]=[
    {
      image:"https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5bd1d0545fafd5371c069731_What-is-Dark-Fiber-1.jpg",
      title:"Sanitary Pads and Hygiene Drive",
      content:"In February 2023, CSquared Africa in Kenya supported a pads and toiletries drive at the Co-operative University of Kenya in Kenya. The drive led by the Co-operative University Students’ Union sought to raise awareness on period dignity and hygiene. In attendance as the Guest Speaker was our Group Strategy Manager – Leon Mengot. At CSquared we believe that period hygiene should be accessible to all. #EndPeriodPoverty"
    },
    {
      image:"https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5bd1d0545fafd5371c069731_What-is-Dark-Fiber-1.jpg",
      title:"GW Gibson High School Computer Lab",
      content:"CSquared Liberia supported the opening of GW Gibson High School Computer Lab located in Liberia in June 2022 in partnership with Lonestar Cell MTN. This partnership provided the school with unlimited broadband, a furnished computer lab and training for the students on computer literacy and career mentorship. This demonstrates our commitment to champion for development and investment in telecoms infrastructure in the continent. "
    },
    {
      image:"https://assets-global.website-files.com/5b6df8bb681f89c158b48f6b/5bd1d0545fafd5371c069731_What-is-Dark-Fiber-1.jpg",
      title:"Sanitary Pads and Hygiene Drive",
      content:"In February 2023, CSquared Africa in Kenya supported a pads and toiletries drive at the Co-operative University of Kenya in Kenya. The drive led by the Co-operative University Students’ Union sought to raise awareness on period dignity and hygiene. In attendance as the Guest Speaker was our Group Strategy Manager – Leon Mengot. At CSquared we believe that period hygiene should be accessible to all. #EndPeriodPoverty"
    }
  ]
  
}
