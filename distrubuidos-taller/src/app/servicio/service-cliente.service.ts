import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders,  HttpErrorResponse} from '@angular/common/http';
//import{Observable} from 'rxjs';
import { Observable, catchError, throwError, BehaviorSubject,tap} from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { LoginReq } from '../services/auth/loginReq';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  private servidor1=" http://localhost:3500/obtener";
  private servidor4="http://localhost:3500/IniciarSesion";

  private servidor2="http://localhost:3500/agregar";
  private servidor3="http://localhost:3500/actualizar";

  private servidor6="http://localhost:3500/Erecuperacion";
  private servidor7="http://localhost:3500/Rcontraseña";

  constructor (private servicio:HttpClient) {}

  MostrarDatos():Observable <any>{
    return this.servicio.get(this.servidor1);
  }
//modificar si no me equivoco esto esta mal
CrearUsuario(nombre: string, apellido: string, correo: string, contraseña: string , usuario: string ):Observable <any>{
  // console.log(JSON.stringify(datos));
  const datosCrear = { nombre, apellido, correo, contraseña, usuario};
   return this.servicio.post(this.servidor2,datosCrear);
 }



  iniciarSesion(correo: string, contraseña: string): Observable<any> {
    // Preparar los datos para enviar
    const datosLogin = { correo, contraseña };
    // Realizar una solicitud POST con los datos de inicio de sesión
    return this.servicio.post(this.servidor4, datosLogin);
  }

  EnviarCorreoRecuperacion(usuario: string): Observable<any> {
    console.log(usuario,"hastta aqu se ññega bien");
    const datosUsuario = { usuario }
    console.log("usuario:",usuario,"datosuuuuuuuu",datosUsuario);
    return this.servicio.post(this.servidor6, datosUsuario);
  }

  RecuperarContraseña(correo: string, token: string, nuevaContraseña: string): Observable<any>{
    return this.servicio.post(this.servidor7, { correo, token, nuevaContraseña });
  }



}

