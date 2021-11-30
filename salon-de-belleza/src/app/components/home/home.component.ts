import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  retornar(){
    this.toastr.info('Cerrrando sesión');
    this.router.navigateByUrl('/logIn');
  }
}
