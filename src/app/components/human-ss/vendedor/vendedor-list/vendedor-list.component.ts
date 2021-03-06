import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../../../../models/human-ss/vendedor/vendedor';
import { VendedorService } from '../../../../services/human-ss/vendedor/vendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css']
})
export class VendedorListComponent implements OnInit {

  vendedores:Vendedor[];

  constructor(private service:VendedorService, private router:Router) { }

  ngOnInit() {
    this.service.getVendedores()
    .subscribe(data=>{
      this.vendedores=data;
      
    })
    
  }


  editar(vendedor:Vendedor):void{
    // console.log(vendedor.id_persona);
    // localStorage.setItem("id_vendedor", String(vendedor.id_persona));
    
    this.router.navigate(["vendedores/actualizar"],{ state: { id: vendedor.id_persona } });

  }

  seleccionar(vendedor:Vendedor):void{
    // console.log(vendedor.id_persona);
    // localStorage.setItem("id_vendedor", String(vendedor.id_persona));
    
    this.router.navigate(["vendedores/eliminar"],{ state: { id: vendedor.id_persona , delete:true } });

  }

}
