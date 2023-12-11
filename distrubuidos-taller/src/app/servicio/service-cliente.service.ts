import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';


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

}
