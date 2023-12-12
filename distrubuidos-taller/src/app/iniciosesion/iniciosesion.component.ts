import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { LoginService } from '../services/auth/login.service'; // Asumiendo que LoginService es el correcto
import { ServiceClienteService } from '../servicio/service-cliente.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {

  loginError: string = "";
  loginForm: FormGroup = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required]
  });

//  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  constructor(private formBuilder: FormBuilder, private router: Router, private  servicioCliente: ServiceClienteService) { }


  login() {
   /* if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.loginService.iniciarSesion(email, password).subscribe({
        next: (userData) => {
          console.log(userData);
          this.router.navigateByUrl('/iniciar-sesion'); // Navegación tras inicio de sesión exitoso
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError = errorData; // Manejo de error
        },
        complete: () => {
          console.info("Inicio de sesión completado");
          this.loginForm.reset(); // Resetear formulario
        }
      });*/


      console.info("llegue***************");
      console.info(this.loginForm.valid);
      console.info(this.loginForm.value.correo);
      console.info(this.loginForm.value.contraseña);
      console.log("**********************")
      if (this.loginForm.valid){
        const correo = this.loginForm.value.correo;
        const contraseña = this.loginForm.value.contraseña;
        console.info("llegue el if ssuu");

        this.servicioCliente.IniciarSesion(correo, contraseña).subscribe({
          next: (userData) => {
            console.log(userData);
            //this.router.navigateByUrl('/cuenta'); // Navegación tras inicio de sesión exitoso
          },
          error: (errorData) => {
            console.error(errorData);
            this.loginError = errorData; // Manejo de error
          },
          complete: () => {
            console.info("Inicio de sesión completado");
            this.loginForm.reset(); // Resetear formulario
          }
        });
    }

    else {
      alert("puto el que lo lea");
    }
  }
}

