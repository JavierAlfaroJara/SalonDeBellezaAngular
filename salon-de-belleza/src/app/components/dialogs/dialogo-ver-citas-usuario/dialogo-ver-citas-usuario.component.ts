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
  detalles: ""
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
        this.cargarCitas(response)
      })
  }

  async cargarCitas(data: any){
    CITA_ELEMENT = [];

    data.forEach(async (actual: any) => {

      this.clientService.getInfoCita(actual.cita).subscribe(
        (response) => {
          this.auxiliar = response
        })

      await new Promise(f => setTimeout(f, 250));

      let json = {
        id: actual.cita,
        idCliente: actual.cliente,
        usernameCliente: actual.user_name,
        fecha: actual.fecha,
        descripcion: actual.descripcion,
        detalles: this.auxiliar
      }
      console.log(json)
      CITA_ELEMENT.push(json)
    });

    await new Promise(f => setTimeout(f, 250));
    this.cargarLista();
  }

  cargarLista(){
    this.items = []
    CITA_ELEMENT.forEach(actual => {
      let item = {
        title: "Fecha de la cita: " + actual.fecha,
        description: "Cita de " + actual.descripcion,
        content: actual.detalles
      }
      this.items.push(item)
    });
    this.loading = false;
  }

}
