import { Component, OnInit } from '@angular/core';
type country = {name: string, key: string, flag:string}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  toggled: Boolean = false
  countries: country[] = [
    {key:'ke', name:'Kenya', flag:'/assets/images/flags/kenya.png'},
    {key:'ug', name:'Uganda', flag:'/assets/images/flags/uganda.png'},
    {key:'tz', name:'Tanzania', flag:'/assets/images/flags/tanzania.png'},
    {key:'et', name:'Ethiopia', flag:'/assets/images/flags/ethiopia.png'},
  ]

  selectedItem: country | null = null

  constructor() { }

  ngOnInit(): void {
  }
  selectItem(item: country): void{
    this.selectedItem = item
    setTimeout(() => {
      this.toggled = false
    }, 100)
  }

}
