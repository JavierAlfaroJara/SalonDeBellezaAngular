import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopClientesComponent } from './components/top-clientes/top-clientes.component';
import { VistaListaUsuariosComponent } from './components/vista-lista-usuarios/vista-lista-usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'logIn', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lista-clientes', component: VistaListaUsuariosComponent},
  {path: 'top-clientes', component: TopClientesComponent},
  {path: '**', redirectTo: 'logIn'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
