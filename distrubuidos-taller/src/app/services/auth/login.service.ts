import { Injectable } from '@angular/core';
import { LoginReq } from './loginReq';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject,tap} from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private apiUrl = 'http://localhost:3000';

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0,email:''});

  constructor(private http: HttpClient) { }

  iniciarSesion(correo: string, contraseña: string) {
    return this.http.post('../usuarios/iniciar-sesion', { correo, contraseña });
  }

  obtenerDatos() {
    return this.http.get(`${this.apiUrl}/ruta-de-datos`);

  }
  login(credentials:LoginReq):Observable<User>{
    return this.http.get<User>('././assets/data.json').pipe(
      tap(userData =>{
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    )
    //console.log(credentials);
  }
  private handleError(error:HttpErrorResponse){
    if(error.status ===0){
        console.error('se ha producido un error', error.error);
    }
    else{
      console.error('backend retorno el codigo de estado',error.status, error.error);
    }
    return throwError(()=> new Error('fallo algo po aqui'));
  }
  get userData():Observable<User>{
    return this.currentUserData.asObservable();
  }
  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
  register(credentials:any){
    console.log(credentials);
  }
}
