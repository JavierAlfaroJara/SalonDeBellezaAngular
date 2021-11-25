import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaListaUsuariosComponent } from './components/vista-lista-usuarios/vista-lista-usuarios.component';

const routes: Routes = [
  {path: 'vista-usuarios', component: VistaListaUsuariosComponent},
  {path: '**', redirectTo: 'vista-usuarios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
