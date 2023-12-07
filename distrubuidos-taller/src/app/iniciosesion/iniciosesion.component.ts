import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';
import { LoginReq } from '../services/auth/loginReq';

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
constructor(private formBuilder:FormBuilder,private router:Router, private loginService: LoginService){}

   //funcion para ver la logica del boton
  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginReq); // captura lo que ingresa en el input
      this.router.navigateByUrl('/registar-usuario'); //aqui donde envia una ves que se tenga todos los campos rellenos
      this.loginForm.reset();// en caso de error se borra
    }
    else{
      alert("error ingresar ");
    }
  }
}


