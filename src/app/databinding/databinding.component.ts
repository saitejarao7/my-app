import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  message:string='Good Morning';
  isDisabled:boolean=true;
  name:string='sai';

  mobile:string='+91';
  submit(){
    alert(this.mobile);
  }

  greet(){
    alert("Good Morning")
  }

  typing(){
    alert('Typing----------')
  }

  state(){
    alert('State')
  }

  
  num1:number=0;
  num2:number=0;
  sum:number=0;
  calculate(){
    this.sum=this.num1+this.num2;
  }
  

}
