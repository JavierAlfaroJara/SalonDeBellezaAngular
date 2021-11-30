import { DataSource } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { DialogData } from '../../vista-lista-usuarios/vista-lista-usuarios.component';

export interface Cita {
  id: number;
  idCliente: number;
  usernameCliente: string;
  fecha: string;
  descripcion: string;
  servicio: string;
  costo: number
}

let CITA_ELEMENT: Cita[] = [];

@Component({
  selector: 'app-dialogo-ver-citas-usuario',
  templateUrl: './dialogo-ver-citas-usuario.component.html',
  styleUrls: ['./dialogo-ver-citas-usuario.component.css']
})
export class DialogoVerCitasUsuarioComponent implements OnInit {

  id = 0
  name = ""
  Citas: any[] = []
  items: any[] = []

  datos: any;
  auxiliar: any;
  panelOpenState = false;
  loading = true;
  servicio = ""
  costo: any

  constructor(
    private clientService: UsersServiceService,
    public dialogRef: MatDialogRef<DialogoVerCitasUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.datos = data
  }

  ngOnInit(): void {
    this.loading = true
    this.id = this.datos.id,
    this.name = this.datos.name
    this.getCitasDeCliente()
  }

  getCitasDeCliente(){
    this.clientService.getCitasDeCliente(this.id).subscribe(
      (response) => {
        console.log("Sigue el response")
        console.log(response)
        this.cargarCitas(response)
      })
  }

  async cargarCitas(data: any){
    CITA_ELEMENT = [];

    data.forEach(async (actual: any) => {
            
      let servicio = ""
      let costo = 0

      this.clientService.getInfoCita(actual.cita).subscribe(
        (response) => {
          this.auxiliar = response
          console.log("sigue el auxiliar")
          console.log(this.auxiliar)
        })

      await new Promise(f => setTimeout(f, 250));

      let fechaTemp = actual.fecha
      let fechaSplit = fechaTemp.split("T",2)
      let fechaYHora = fechaSplit[0] + " " + fechaSplit[1] 

      this.auxiliar.forEach((i: { servicio: string; costo: any; }) => {
        servicio += (i.servicio + ", ")
        costo += i.costo
      });

      let json = {
        id: actual.cita,
        idCliente: actual.cliente,
        usernameCliente: actual.user_name,
        fecha: fechaYHora,
        descripcion: actual.descripcion,
        servicio: servicio,
        costo: costo
      }
      CITA_ELEMENT.push(json)
      console.log(json)
    });

    await new Promise(f => setTimeout(f, 250));
    this.cargarLista();
  }

  cargarLista(){
    this.items = []

    if(CITA_ELEMENT.length == 0){
      let item = {
        title: "No hay citas asociadas",
        description: "",
        content: ""
      }
      this.items.push(item)
      this.loading = false
      return
    }

    CITA_ELEMENT.forEach(actual => {
      let item = {
        title: "Fecha y hora de la cita: " + actual.fecha,
        description: "Cita de " + actual.descripcion,
        content: actual.servicio + " por un costo de: " + actual.costo + " colones"
      }
      this.items.push(item)
    });
    this.loading = false;
  }

}
