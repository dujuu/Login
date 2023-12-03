import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
    loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password: ['',Validators.required],
  }
  )
  constructor(private formBuilder:FormBuilder){}

  login(){
    if(this.loginForm.valid){
      console.log("llamada servidor");
    }
    else{
      alert("error ingresar ");
    }
  }
}


