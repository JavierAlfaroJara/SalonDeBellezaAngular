import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersServiceService } from 'src/app/Services/users-service.service';

export interface cliente {
  full_name: string;
  user_name: string;
  visitas: number;
}

let ELEMENT_DATA: cliente[] = []

@Component({
  selector: 'app-top-clientes',
  templateUrl: './top-clientes.component.html',
  styleUrls: ['./top-clientes.component.css']
})
export class TopClientesComponent implements OnInit {
  fechaInicial="";
  fechaFinal="";
  constructor(private userService: UsersServiceService) { }

  displayedColumns: string[] = ['user','nombre', 'visitas'];
  dataSource = new MatTableDataSource<cliente>(ELEMENT_DATA);
  isFiltred = false
  start_Date: any = undefined;//Almacena la fecha de inicio
  end_Date: any = undefined;//Almacena la fecha final
  data:any  //almacena la consulta al backend

  ngOnInit(): void {
    this.getTopClients('2021/11/11','2021/12/11')
  }

  dateFilter = (date: Date): boolean => {
   
    var startDay = this.start_Date.getDate();
    var startMonth = this.start_Date.getMonth();
    var startYear = this.start_Date.getFullYear();

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    if(year > startYear){
      return year > startYear;
    }else if((year === startYear) && (month === startMonth) ){
      return day > startDay && month >= startMonth && year >= startYear;
    }else if(year === startYear){
      return month >= startMonth && year >= startYear;
    }else{
      return year > startYear;
    }
  }
  //obtiene los clientes que más visitan el salon en un rango de tiempo
  getTopClients(startDate:string, endDate:string){
    this.userService.getTopClients(startDate,endDate).subscribe((response => {
      this.data = response;
      this.dataSource = new MatTableDataSource<cliente>(this.data);
    }))
  }

}
