import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  flipkart:any=[];
  constructor(private _flipkartService:FlipkartService){
    _flipkartService.getFlikart().subscribe((data:any)=>{
      console.log(data);
      this.flipkart=data;
      console.log(this.flipkart);
    },(err:any)=>{
  alert("Internal Sever error!")
  }
)
  }
}

