import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {


  constructor(private _vehicleService:VehiclesService, private _router:Router, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        if(this.id){
          _vehicleService.getVehicle(data.id).subscribe(
            (data:any)=>{
              console.log(data);
              this.vehicleForm.patchValue(data);
            },(err:any)=>{
              alert("unable to fetch data")
            }
          )
        }
        
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

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
     
    id:any='';
    submit(){
      if(this.id){
        this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe((data:any)=>{
          console.log(data);
          alert("Vehicle record updated Successfully");
          this._router.navigateByUrl('/dashboard/vehicles')
        },(err:any)=>{
          alert("unable to update")
        })

      }else{
      console.log(this.vehicleForm.value);
      this._vehicleService.createVehicles(this.vehicleForm.value).subscribe((data:any)=>{
        console.log(data);
        alert("Vehicle created Successfully");
        this._router.navigateByUrl('/dashboard/vehicles')
      },(err:any)=>{
        alert("internal server error")
      })
    }
    }
  
}
