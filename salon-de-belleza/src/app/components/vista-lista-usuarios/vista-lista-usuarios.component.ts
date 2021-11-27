import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogoVerCitasUsuarioComponent } from '../dialogs/dialogo-ver-citas-usuario/dialogo-ver-citas-usuario.component';

export interface DialogData{
  id: string
  name: string
}

@Component({
  selector: 'app-vista-lista-usuarios',
  templateUrl: './vista-lista-usuarios.component.html',
  styleUrls: ['./vista-lista-usuarios.component.css']
})

export class VistaListaUsuariosComponent implements OnInit {

  ELEMENT_DATA: any[] = []
  Clientes: any;
  infoClientes: any;
  
  constructor(
    // private dialogService: DialogsServiceService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['user','nombre', 'email', 'actions'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  ngOnInit(): void {
    this.generarClientes();
    this.dataSource.sort = this.sort;
  }

  generarClientes(){

    // To-do: esto se descomenta cuando se agreguen los servicios pertinentes 

    // this.clientService.getClients().subscribe(
    //   (response: any) =>{
    //     this.Clientes = response
    //     this.dataSource = this.Clientes.results
    //   });

    // To-do: esto se borra cuando se agreguen los servicios pertinentes 
    let json = {
      id: 1,
      full_name: "Sabri Araya",
      user_name: "Sabrux",
      email: "sabrux@gmail.com",
      fecha: "0001-01-01T00:00:00"
    }
    this.ELEMENT_DATA.push(json);
    
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
