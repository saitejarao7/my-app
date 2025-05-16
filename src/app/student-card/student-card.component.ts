import { Component } from '@angular/core';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  studentcard:any=[];
  constructor(private _studentcardService:StudentCardService){
    _studentcardService.getstudentcard().subscribe((data:any)=>{
      console.log(data);
      this.studentcard=data;
      console.log(this.studentcard);
    },(err:any)=>{
  alert("Internal Sever error!")
  }
)
  }

  keywords:any='';
  search(){
   this._studentcardService.filterstudentcard(this.keywords).subscribe(
     (data:any)=>{
       console.log(data);
       this.studentcard=data
     }
   )
  }

  column:any='';
  order:any='';
  sort(){
   this._studentcardService.sortedstudentcard(this.column,this.order).subscribe((data:any)=>
   {
     console.log(data);
     this.studentcard=data
   },(err:any)=>{
     alert("Internal server Error")
   }
 )
  }

  limit:number=0;
   page:number=0;
   pagination(){
    this._studentcardService.paginatedstudentcard(this.limit,this.page).subscribe((data:any)=>
    {
      console.log(data);
      this.studentcard=data
    },(err:any)=>{
      alert("Internal server Error")
    }
  )
   }

   delete(id:number){
    if(confirm("Are you sure to delete")==true){
    this._studentcardService.deletestudentcard(id).subscribe((data:any)=>
      {
        alert("Record deleted successfully");
        
      },(err:any)=>{
        alert("Internal server Error");
      }
    )
  }else{
    alert('you have cancelled delete')
  }
  }
}
