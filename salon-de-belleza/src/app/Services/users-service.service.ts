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

}
