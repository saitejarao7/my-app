import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateuserTaskComponent } from './createuser-task/createuser-task.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'weather',component:WeatherComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'student-card',component:StudentCardComponent},
    {path:'student-form',component:StudentFormComponent},
    {path:"create-user",component:CreateUserComponent},
    {path:"createuser-task",component:CreateuserTaskComponent},
    {path:'login',component:LoginComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    
  ]},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
