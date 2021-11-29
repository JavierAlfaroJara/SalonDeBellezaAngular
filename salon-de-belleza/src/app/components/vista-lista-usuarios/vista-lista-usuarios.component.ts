import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { DialogoVerCitasUsuarioComponent } from '../dialogs/dialogo-ver-citas-usuario/dialogo-ver-citas-usuario.component';

export interface DialogData{
  id: string
  name: string
}

export interface cliente{
    id: number;
    full_name: string;
    user_name: string;
    email: string;
    fecha: string
}

let ELEMENT_DATA: cliente[] = [];

@Component({
  selector: 'app-vista-lista-usuarios',
  templateUrl: './vista-lista-usuarios.component.html',
  styleUrls: ['./vista-lista-usuarios.component.css']
})

export class VistaListaUsuariosComponent implements OnInit {

  Clientes: cliente[] = [];
  infoClientes: any;
  
  constructor(
    private clientService : UsersServiceService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['user','nombre', 'email', 'actions'];
  dataSource = new MatTableDataSource<cliente>(ELEMENT_DATA);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getClientes();
  }

  getClientes(){
    this.clientService.getClients().subscribe(
      (response) =>{
        this.Clientes = response
        this.cargarClientes(this.Clientes)
      });
  }

  cargarClientes(data: any){
    ELEMENT_DATA = [];

    data.forEach((actual: { id: any; full_name: any; user_name: any; email: any; fecha: any; }) => {
      let json = {
        id: actual.id,
        full_name: actual.full_name,
        user_name: actual.user_name,
        email: actual.email,
        fecha: actual.fecha
      }
      ELEMENT_DATA.push(json)
    });
    this.dataSource = new MatTableDataSource<cliente>(ELEMENT_DATA);
  }

  openDialog(id: any, full_name: any): void {
    this.dialog.open(DialogoVerCitasUsuarioComponent,
      {
        data:{
          id: id,
          name: full_name,
          height: '500px', 
          width: '800px'
        },
        disableClose: false
      }).afterClosed();
  }

}
