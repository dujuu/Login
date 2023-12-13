import { Component } from '@angular/core';
import { ServiceClienteService } from '../servicio/service-cliente.service';
import{Usuario} from'../../app/interfaces/usuario'

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {

  datosC:Array<Usuario>=[];
  constructor(private servicioCliente: ServiceClienteService ){}

  ngOnInit(): void{
    this.servicioCliente.MostrarDatos().subscribe(datos => {
      for(let i=0; i<datos.length; i++){
        this.datosC.push(datos[i]);
      }
      console.log(datos);
    });
  }

}
