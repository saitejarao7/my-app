import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 constructor(private _loginService:LoginService,private _router:Router){}
 public loginform:FormGroup=new FormGroup({
  email:new FormControl(),
  password:new FormControl()
 })

 login(){
  console.log(this.loginform.value);
  this._loginService.userLogin(this.loginform.value).subscribe(
    (data:any)=>{
      alert("Login Successfull");
      this._router.navigateByUrl('/dashboard/welcome');
    },(err:any)=>{
      alert("Inernal Error")
    }
  )
 }
}
