import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuser-task',
  templateUrl: './createuser-task.component.html',
  styleUrls: ['./createuser-task.component.css']
})
export class CreateuserTaskComponent {

  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholar'){
          this.userForm.addControl('busFee',new FormControl());
          this.userForm.removeControl('hostelFee');
        }else{
          this.userForm.addControl('hostelFee',new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )
  }

  public userForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    class:new FormControl(),
    fatherName:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
      pin:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    type:new FormControl(),
    marks:new FormArray([])
  })
  get MarksFormArray(){
    return this.userForm.get('marks') as FormArray;
  }

  addMark(){
    this.MarksFormArray.push(
      new FormGroup({
        class:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
        
      })
    )
  }

  

  deleteMark(i:number){
    this.MarksFormArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm);
}


}


