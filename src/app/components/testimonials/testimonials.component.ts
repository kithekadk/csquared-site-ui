import { Component, OnInit } from '@angular/core';
import {Testimonials} from "../definitions";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials: Testimonials[] = [
    {
      company: 'Company 1',
      name: 'John Doe',
      position: 'C.E.O',
      content:'ajg sjhasbjhas sahbas jasyas kasjas kuas skhgygahh sjgsa sjbiusagiydgiygdigiy'
    },
    {
      company: 'Another Company',
      name: 'Moses Kamau',
      position: 'C.E.O',
      content:'ajg sjhasbjhas sahbas jasyas kasjas kuas skhgygahh sjgsa sjbiusagiydgiygdigiy'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
