import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ss-admin';

  constructor(private router:Router){}

  
  vendedores(){
    this.router.navigate(["vendedores"])
  }

  listar(){
    this.router.navigate(["vendedores/listar"])
  }

  insertar(){
    this.router.navigate(["vendedores/insertar"])
  }


 

  
}
