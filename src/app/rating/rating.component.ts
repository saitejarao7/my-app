import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
@Input() rating:number=0;
 
// rate:number=0;
// @Output() rateEvent:EventEmitter<number>=new EventEmitter();
// submit(){
//   this.rateEvent.emit(this.rate)
// }

}
