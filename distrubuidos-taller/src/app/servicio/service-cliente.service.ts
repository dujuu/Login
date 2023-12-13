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

  servidor1=" http://localhost:3500/obtener";
  servidor4="http://localhost:3500/IniciarSesion";

  servidor2="http://localhost:3500/agregar";
  servidor3="http://localhost:3500/actualizar";


  constructor (private servicio:HttpClient) {}

  MostrarDatos():Observable <any>{
    return this.servicio.get(this.servidor1);
  }

//modificar si no me equivoco esto esta mal
  CrearUsuario(datos: Usuario):Observable <any>{
    console.log(JSON.stringify(datos));
    return this.servicio.post(this.servidor2,JSON.stringify(datos),httpOptions);
  }


  //IniciarSesion(correo: '',contraseña:''): Observable <any>{
  //  return this.servicio.get(this.servidor4);
  //}
  IniciarSesion(correo: string, contrasena: string): Observable<any> {
    // Preparar los datos para enviar
    const datosLogin = { correo, contrasena };

    // Realizar una solicitud POST con los datos de inicio de sesión
    return this.servicio.post(this.servidor4, datosLogin);
  }

 


}

