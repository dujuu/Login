import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service'; // Asumiendo que LoginService es el correcto

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {

  loginError: string = "";
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  login() {
    if (this.loginForm.valid) {
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
      });
    } else {
      alert("Por favor, ingresa un correo electrónico y contraseña válidos.");
    }
  }
}

