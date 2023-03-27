import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
toggle=false
  constructor(private apiService:ApiService) { }
careers:any[]=[]
  ngOnInit(): void {
    this.apiService.getCareers().subscribe(res=>{
      console.log(res['data']);
      this.careers=res['data']
    })
  }


  toggleForm(){
    this.toggle = !this.toggle
  }
}
