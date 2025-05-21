import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-are',
  templateUrl: './text-are.component.html',
  styleUrls: ['./text-are.component.css']
})
export class TextAreComponent {
   @Input() max:number=0;
   text:string='';
}
