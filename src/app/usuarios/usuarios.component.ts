import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../Models/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios : Usuario[];
  constructor(private service : UsuarioService, private route : Router) { 
    this.service.getAllUsuarios().subscribe(res => {
    this.usuarios = res;
    console.log(this.usuarios);
    });;
  }

  completados(userId){
    this.route.navigate (['mostrarToDos/' + userId + '/true']);
  }

  noCompletados(userId){
    this.route.navigate (['mostrarToDos/' + userId + '/false']);
  }



  ngOnInit() {
  }

}
