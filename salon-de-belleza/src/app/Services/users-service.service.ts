import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  URL_USERS = "https://localhost:44327/Api/Services"

  constructor(
    private http: HttpClient
  ) { }

  // Obtiene los clientes registrados
  getClients(): Observable<any> {
    return this.http.get(`${this.URL_USERS}/users`);
  }

  // Obtiene las citas asociadas a un cliente
  getCitasDeCliente(param: any){
    return this.http.get(`${this.URL_USERS}/ClientQuotes/${param}`);
  }

  // Obtiene los servicios de una cita
  getInfoCita(param: any){
    return this.http.get(`${this.URL_USERS}/AppointmentServices?Id=${param}`);
  }
  
  // servicio para iniciar sesion como administrador 
  logIn(email: string,password:string){
    return this.http.get(`${this.URL_USERS}/logIN/administrator?email=${email}&password=${password}`)
  }

  //servicio que obtiene las ultimas visitas a la según un tiempo 
  getLastVisits(){
    return this.http.get(`${this.URL_USERS}/lastAppointment`)
  } 

  // servico que trae el top de los clientes que más visitan el salon, formato de fecha AAAA/MM/DD
  getTopClients(startDate:string, endDate:string ){
    return this.http.get(`${this.URL_USERS}/custumerVisits?fechaInicial=${startDate}&fechaFinal=${endDate}`)
  }

  getHistoryServices(startDate:string, endDate:string ){
    return this.http.get(`${this.URL_USERS}/histories?fechaInicial=${startDate}&fechaFinal=${endDate}`)
  }

}
