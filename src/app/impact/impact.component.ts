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
      image:"https://media.istockphoto.com/id/1427966044/photo/cleaning-supplies-cloth-and-hygiene-with-hands-and-gloves-for-domestic-cleaner-and.jpg?b=1&s=170667a&w=0&k=20&c=hlS93gQetrbvBG2j3y4SEX9ukCa3M5pwbtm1gbi7hTg=",
      title:"Sanitary Pads and Hygiene Drive",
      content:"In February 2023, CSquared Africa in Kenya supported a pads and toiletries drive at the Co-operative University of Kenya in Kenya. The drive led by the Co-operative University Students’ Union sought to raise awareness on period dignity and hygiene. In attendance as the Guest Speaker was our Group Strategy Manager – Leon Mengot. At CSquared we believe that period hygiene should be accessible to all. #EndPeriodPoverty"
    },
    {
      image:"https://cdn.pixabay.com/photo/2013/09/11/00/28/language-lab-181083__340.jpg",
      title:"GW Gibson High School Computer Lab",
      content:"CSquared Liberia supported the opening of GW Gibson High School Computer Lab located in Liberia in June 2022 in partnership with Lonestar Cell MTN. This partnership provided the school with unlimited broadband, a furnished computer lab and training for the students on computer literacy and career mentorship. This demonstrates our commitment to champion for development and investment in telecoms infrastructure in the continent. "
    },
    {
      image:"https://cdn.pixabay.com/photo/2018/05/12/11/37/team-3393037__340.jpg",
      title:"CSquared Ghana Partnership with Teledata and BASICS International",
      content:"CSquared Ghana in collaboration with Teledata and BASICS International, a non-profit in Chorkor provided free broadband access. This collaboration launched in November 2022 benefited over 3,000 residents of the seaside community Chorkor- a suburb in Accra. Despite the Ghanaian capital being the most densely internet-connected city in the country, there are pockets that do not have access to the internet. Broadband is a reliable means to connect the unconnected spanning across various sectors from health care to education and this partnership fulfills our ambition of #InternetForAll. This initiative is part of our CSR programme under the theme “LetsGrowTogether” whose aim is to drive digitization and economic activity through connectivity, career development and digital skills training."
    }
  ]
  
}
