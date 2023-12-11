import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Usuario } from '../interfaces/usuario';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  servidor1=" http://localhost:3500/obtener";
  servidor2="http://localhost:3500/agregar";
  servidor3="http://localhost:3500/actualizar";


  constructor (private servicio:HttpClient) {}

  MostrarDatos():Observable <any>{
    return this.servicio.get(this.servidor1);
  }

  CrearUsuario(datos: Usuario):Observable <any>{
    console.log(JSON.stringify(datos));
    return this.servicio.post(this.servidor2,JSON.stringify(datos),httpOptions);
  }


}
