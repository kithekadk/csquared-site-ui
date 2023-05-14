import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form!:FormGroup;

  constructor(private fb:FormBuilder, private countryservice:CountryService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      country_id: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      subject: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  view= false
  SubmitIssue(){
    if(this.form){
      console.log(this.form.value);
      this.countryservice.contactCsquared(this.form.value).subscribe(res=>{
        console.log(res);   
        this.form.reset();
        this.view=true; 
        setTimeout(() => {
          this.view=false;
        }, 3000);    
      })
    }
  }
}
