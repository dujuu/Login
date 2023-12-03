import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {path:'', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio',component:IniciosesionComponent},
  {path: 'registar-usuario',component:CrearCuentaComponent},
  {path: 'recuperar-clave',component:RecuperarClaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
