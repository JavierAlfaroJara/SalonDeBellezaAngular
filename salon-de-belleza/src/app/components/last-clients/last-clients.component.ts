import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersServiceService } from 'src/app/Services/users-service.service';

export interface lastAppointment{
  id: number,
  full_name: string,
  user_name: string,
  appointment: number,
  appointment_date: Date,
  description: string  
}

let ELEMENT_DATA: lastAppointment[] = []




@Component({
  selector: 'app-last-clients',
  templateUrl: './last-clients.component.html',
  styleUrls: ['./last-clients.component.css']
})


export class LastClientsComponent implements OnInit {

  data:any
  constructor(private userServices: UsersServiceService) { }
  
  displayedColumns: string[] = ['user','name', 'appointment', 'date','description'];
  
  dataSource = new MatTableDataSource<lastAppointment>(ELEMENT_DATA);
  
  isFiltred = false
  
  start_Date: any = undefined;//Almacena la fecha de inicio
  end_Date: any = undefined;//Almacena la fecha final
  
  
  
  ngOnInit(): void {
    this.getLastVisits()
  }

  // obtiene las ultiams visitas al salon formato de fecha AAAA/MM/DD
  getLastVisits(){
    this.userServices.getLastVisits().subscribe((response) => {
      this.data = response;
      console.log(this.data)
      this.dataSource = new MatTableDataSource<lastAppointment>(this.data);

    })
  }
}
