import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersServiceService } from 'src/app/Services/users-service.service';

export interface history {
  appointment: string;
  date: Date;
  description: number;
  cost:number
}
let ELEMENT_DATA: history[] = []

@Component({
  selector: 'app-historial-servicios',
  templateUrl: './historial-servicios.component.html',
  styleUrls: ['./historial-servicios.component.css']
})
export class HistorialServiciosComponent implements OnInit {
  fechaInicial="";
  fechaFinal="";
  data:any;
  constructor(private userService: UsersServiceService) { }

  displayedColumns: string[] = ['appointment','date', 'description', 'cost'];
  dataSource = new MatTableDataSource<history>(ELEMENT_DATA);

  ngOnInit(): void {
    this.getHistoryServices('2021/11/08','2021/12/08')
  }

  getHistoryServices(fechaInicial: string,fechaFinal:string){
    this.userService.getHistoryServices(fechaInicial,fechaFinal).subscribe((response => {
      this.data = response;
      this.dataSource = new MatTableDataSource<history>(this.data);
    }))
  }

}
