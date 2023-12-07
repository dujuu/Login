import { Injectable } from '@angular/core';
import { LoginReq } from './loginReq';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get(`${this.apiUrl}/ruta-de-datos`);
  }
  login(credentials:any){
    console.log(credentials);
  }
  register(credentials:any){
    console.log(credentials);
  }
}
