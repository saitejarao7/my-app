import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentCardService } from '../student-card.service';
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  constructor(private _studentcardService:StudentCardService, private _router:Router, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        if(this.id){
        _studentcardService.getstudentscard(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.StudentForm.patchValue(data);
          },(err:any)=>{
            alert("unable to fetch vehicle data")
          }
        )}
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  public StudentForm:FormGroup= new FormGroup({
    name:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    profile_picture:new FormControl(),
    school_city:new FormControl(),
    school_name:new FormControl(),
    school_pin:new FormControl(),

  })

  id:any='';
  submit(){
    if(this.id){
      this._studentcardService.updatestudentcard(this.id,this.StudentForm.value).subscribe((data:any)=>{
        console.log(data);
        alert("student form updated successfully")
        this._router.navigateByUrl('/dashboard/student-form')
      },(err:any)=>{
        alert("Internal server error")
      })
    }else{
    console.log(this.StudentForm);
    this._studentcardService.createstudentcard(this.StudentForm.value).subscribe((data:any)=>{
      console.log(data);
      alert("student created successfully")
      this._router.navigateByUrl('/dashboard/student-form')
    },(err:any)=>{
      alert("Internal server error")
    })
  }
  }
}
