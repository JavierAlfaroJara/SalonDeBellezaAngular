import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../vista-lista-usuarios/vista-lista-usuarios.component';

@Component({
  selector: 'app-dialogo-ver-citas-usuario',
  templateUrl: './dialogo-ver-citas-usuario.component.html',
  styleUrls: ['./dialogo-ver-citas-usuario.component.css']
})
export class DialogoVerCitasUsuarioComponent implements OnInit {

  id = ""
  name = ""

  datos: any;
  panelOpenState = false;

  constructor(
    public dialogRef: MatDialogRef<DialogoVerCitasUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.datos = data
  }

  ngOnInit(): void {
    this.id = this.datos.id,
    this.name = this.datos.name
  }

}
