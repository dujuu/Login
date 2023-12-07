import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  registerForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password: ['',Validators.required],
  }
  )
  constructor(private formBuilder:FormBuilder, private router:Router, private registroService: LoginService){}
  register(){
    if(this.registerForm.valid){
      // captura lo que ingresa en el input
      this.registroService.register(this.registerForm.value);
      //aqui donde envia una ves que se tenga todos los campos rellenos
      this.router.navigateByUrl('/inicio');
      // en caso de error se borra
      this.registerForm.reset();
    }
  }
}
