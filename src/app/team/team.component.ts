import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { authorities } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  personId!:string;

previousmember!: authorities;
leftIndex!:number
nextmember!: authorities;
rightIndex!:number
id!:string
  constructor(private router:Router, private route:ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.id = this.router.url;
    this.getTeamMember();
    this.route.params.subscribe((p:Params)=>{
      this.personId= p['id']
      this.teammember = this.apiService.getTeamMember(+this.personId);
      this.previousmember = this.apiService.getTeamMember((+this.personId-1))
      this.nextmember = this.apiService.getTeamMember((+this.personId+1))
    })
    
  }

index!:number;
teammember!: authorities;

getTeamMember(){ 
  this.index = (Number(this.id.replace('/team/','')));
  this.teammember = this.apiService.getTeamMember(this.index);
  this.leftIndex = (this.index-1);
  this.rightIndex = (this.index+1);
  this.getPreviousMember();
  this.getNextMember();
  
  }
  
getPreviousMember(){
  this.index = (Number(this.id.replace('/team/','')));
  if(this.index!==0){
    this.previousmember = this.apiService.getTeamMember((this.index-1));

    console.log(this.previousmember.name);
  }
} 


getNextMember(){
  this.index = (Number(this.id.replace('/team/','')));
  if(this.index < this.apiService.management.length){
    this.nextmember = this.apiService.getTeamMember((this.index+1));
    console.log(this.nextmember.name);
    
  }
}
}
