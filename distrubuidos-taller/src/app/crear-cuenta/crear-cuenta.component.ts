import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';
import { Usuario } from '../interfaces/usuario';
import { ServiceClienteService } from '../servicio/service-cliente.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})

export class CrearCuentaComponent implements OnInit {
  datosC: Array<Usuario> = [];
  registerForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required],
    usuario: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private servicioCliente: ServiceClienteService, private router: Router) {}

  ngOnInit(): void {}

  crearCliente() {
    if (this.registerForm.valid) {
      const nombre = this.registerForm.value.nombre;
      const apellido = this.registerForm.value.apellido;
      const correo = this.registerForm.value.correo;
      const contraseña = this.registerForm.value.contraseña;
      const usuario = this.registerForm.value.usuario;

      this.servicioCliente.CrearUsuario(nombre, apellido, correo, contraseña, usuario).subscribe({
        next: (userData) => {
          console.log(userData);
          this.router.navigateByUrl('/cuenta');
        },
        error: (errorData) => {
          console.error(errorData);

        },
        complete: () => {
          console.info('Creación de usuario completada');
          this.registerForm.reset(); // Resetear formulario
        }
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}

