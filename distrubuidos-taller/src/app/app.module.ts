import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {morgan} from 'morgan';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CuentaComponent } from './cuenta/cuenta.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './module/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    IniciosesionComponent,
    CrearCuentaComponent,
    RecuperarClaveComponent,
    CuentaComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
