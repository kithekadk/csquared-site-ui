import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-career-description',
  templateUrl: './career-description.component.html',
  styleUrls: ['./career-description.component.css']
})
export class CareerDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
