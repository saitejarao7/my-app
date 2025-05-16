import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {


  constructor(private _vehicleService:VehiclesService, private _router:Router){}

    public vehicleForm:FormGroup= new FormGroup({
      Vehicle:new FormControl(),
      color:new FormControl(),
      cost:new FormControl(),
      fuel:new FormControl(),
      manufacturer:new FormControl(),
      image:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      tyres:new FormControl(),

    })

    submit(){
      console.log(this.vehicleForm.value);
      this._vehicleService.createVehicles(this.vehicleForm.value).subscribe((data:any)=>{
        console.log(data);
        alert("Vehicle created Successfully");
        this._router.navigateByUrl('/dashboard/vehicles')
      },(err:any)=>{
        alert("internal serber error")
      })
    }
  
}
