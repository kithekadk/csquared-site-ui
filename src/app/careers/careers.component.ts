import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  form!:FormGroup
toggle=false
  constructor(private apiService:ApiService, private fb:FormBuilder , private http: HttpClient) { }
careers:any[]=[]
  ngOnInit(): void {
    this.apiService.getCareers().subscribe(res=>{
      console.log(res['data']);
      this.careers=res['data']
    })


    // Form Logic
    this.form= this.fb.group({
      career_id: [null, [Validators.required]],
      linkedInUrl: [null, [Validators.required]],
      email: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      coverLetter: [null, [Validators.required]],
      cv: [null, [Validators.required]]
    })
  }

  toggleForm(job_id:string){
    this.toggle = !this.toggle
    this.form.get('career_id')?.setValue(job_id)
  }

  SubmitCareer(){
    console.log(this.form);
    this.apiService.ApplyCareer(this.form.value).subscribe(res=>{
      console.log(res);
      
    })
  }

  onChange(event: Event){
    //Get the users selected Resume stores it on cloudinary and generates a url that can be used to acces this resume from cloudinary
    const target = event.target! as HTMLInputElement
    const files = target.files
    if(files){
      console.log(files[0]);

      const formData = new FormData();

      formData.append("file", files[0]);
      formData.append("upload_preset", "csquared")
      formData.append("cloud_name", "dtn9kzx2v");

      this.http.post<{url: string}>("https://api.cloudinary.com/v1_1/dtn9kzx2v/image/upload", formData).subscribe((res)=>{
        console.log(res.url);
        this.form.get('cv')?.setValue(res.url)
      },
        error =>{
          console.log({error});
        }
      )
    }
  }
}
