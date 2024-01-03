import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceClienteService } from '../servicio/service-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent {
  recuperarForm: FormGroup = this.formBuilder.group({
    usuario: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private servicioCliente: ServiceClienteService, private router: Router) {}

  enviarCorreo() {
    if (this.recuperarForm.valid) {
      const usuario1 = this.recuperarForm.value.usuario;

      this.servicioCliente.EnviarCorreoRecuperacion(usuario1).subscribe({
        next: (response) => {
          console.log(response);

          alert('Correo de recuperación enviado con éxito suuii');

         // this.router.navigateByUrl('/');
        },
        error: (error) => {
          console.error(error);

          alert('no se envio sad');
        },
        complete: () => {

        }
      });
    } else {
      alert('Error al ingresar datos :c ');
    }
  }
}
