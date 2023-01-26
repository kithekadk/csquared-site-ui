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
      content:'This company has changed the lives of Netizens'
    },
    {
      company: 'Another Company',
      name: 'Moses Kamau',
      position: 'C.E.O',
      content:'We are happy for the services you provide'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
