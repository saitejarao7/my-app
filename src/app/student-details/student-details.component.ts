import { Component } from '@angular/core';
import { StudentCardService } from '../student-card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  id:any='';
  studentscard:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _studentcardService:StudentCardService){
    _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
      console.log(this.id);
    },(err:any)=>{
      alert("Internal server error")
    }
  )

  _studentcardService.getstudentscard(this.id).subscribe(
    (data:any)=>{
      console.log(data);
      this.studentscard=data;
    },(err:any)=>{
      alert("Internal Server Error!")
    }  
  )
}
}
