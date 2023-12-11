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
  registerForm: FormGroup;
  datosC:Array<Usuario>=[];
 /* registerForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password: ['',Validators.required],
  }
  )*/
  constructor(private form:FormBuilder, private router:Router, private servicioCliente: ServiceClienteService ){
    this.registerForm = this.form.group({
      nombre:['', Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.required],
      contraseña:['',Validators.required],
      usuario:['',Validators.required]
    });
  }
  //register(){
    //if(this.registerForm.valid){
      // captura lo que ingresa en el input
      //this.servicioCliente.register(this.registerForm.value);
      //aqui donde envia una ves que se tenga todos los campos rellenos
      //this.router.navigateByUrl('/inicio');
      // en caso de error se borra
      //this.registerForm.reset();
   // }
  //}
  ngOnInit():void{

  }
  CrearCliente(){
    this.servicioCliente.CrearUsuario({
      id:0,
      nombre: this.registerForm.get("nombre")?.value,
      apellido: this.registerForm.get("apellido")?.value,
      correo: this.registerForm.get("correo")?.value,
      contraseña: this.registerForm.get("contraseña")?.value,
      usuario: this.registerForm.get("usuario")?.value
    }).subscribe(respuesta =>{
      console.log(respuesta);
    });
  }
}



