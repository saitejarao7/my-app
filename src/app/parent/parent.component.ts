import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // imports: [ChildComponent]
})
export class ParentComponent {
  store(value:any){
    alert(value);
  }

  name:string='';
  display(data:string){
    this.name=data;
  }
}
