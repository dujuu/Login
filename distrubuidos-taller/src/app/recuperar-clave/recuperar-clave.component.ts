import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent {
  recuperarForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password: ['',Validators.required],
  }
  )
  constructor(private formBuilder:FormBuilder){}

  login(){
    if(this.recuperarForm.valid){
      console.log("llamada servidor");
    }
    else{
      alert("error ingresar ");
    }
  }


}
