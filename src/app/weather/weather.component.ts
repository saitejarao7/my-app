import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weather:any=[];
   constructor(private _weatherService:WeatherService){
     _weatherService.getWeather().subscribe((data:any)=>{
       console.log(data);
       this.weather=data;
       console.log(this.weather);
     },(err:any)=>{
   alert("Internal Sever error!")
   }
 )
   }
}
