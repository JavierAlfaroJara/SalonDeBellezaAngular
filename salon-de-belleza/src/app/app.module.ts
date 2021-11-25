import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VistaListaUsuariosComponent } from './components/vista-lista-usuarios/vista-lista-usuarios.component';
import { DialogoVerCitasUsuarioComponent } from './components/dialogs/dialogo-ver-citas-usuario/dialogo-ver-citas-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaListaUsuariosComponent,
    DialogoVerCitasUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
