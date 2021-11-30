import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email="";
  password="";
  data:any;

  
  constructor(
    private clientService : UsersServiceService, 
    private router : Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  ingresar(email:string, password:string){

    this.clientService.logIn(email,password).subscribe( (response) => {
      if(response != null){
        this.data = response
        this.toastr.success('Bienvenido de nuevo ' + this.data.full_name);
        //this.toastr.success('Hello world!', 'Toastr fun!');
        this.router.navigateByUrl('home')
      }else{
        this.toastr.error('Email o contraseña incorrectos intente de nuevo');
      }
    })
  }
}
