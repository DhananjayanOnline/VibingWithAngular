import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EcomService } from '../services/ecom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private service:EcomService){}

  accessToken:any = ""

  LoginForm = new FormGroup({
    'username': new FormControl("", [Validators.required]),
    'password': new FormControl("", [Validators.required])
  })

  get username(){
    return this.LoginForm.get('username')
  }

  get password(){
    return this.LoginForm.get('password')
  }

  authenticate(){
    let data = this.LoginForm.value
    this.service.getToken(data).then(res=> res.json()).then(data=> console.log(data.access))
  }

}
