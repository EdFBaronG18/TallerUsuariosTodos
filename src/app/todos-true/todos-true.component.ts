import { Component, OnInit } from '@angular/core';
import { Todo } from '../Models/Usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-todos-true',
  templateUrl: './todos-true.component.html',
  styleUrls: ['./todos-true.component.css']
})
export class TodosTrueComponent implements OnInit {

  todos : Todo[];
  constructor(private activeRoute : ActivatedRoute, private service : UsuarioService) { 
    this.activeRoute.params.subscribe (
      data => {
      let userIdParam = data['idUsuario'];
      let completedParam = data['completed'];
      console.log('idUsuario:',userIdParam);
      console.log('completed:',completedParam);
      this.service.getTodos(userIdParam,completedParam).subscribe(res => {
        this.todos = res;
        console.log(this.todos); 
      });
      }
      );
  }

  ngOnInit() {
  }

}
