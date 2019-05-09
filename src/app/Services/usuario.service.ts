import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Usuario, Todo } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  getAllUsuarios(){
    return this.http.get<Usuario[]>(environment.urlConsultaUsuarios);
  }

  getTodos(id, completed){
    const body = new HttpParams().set('userId', id ).set('completed', completed);
    return this.http.get<Todo[]>(environment.urlConsultaTodos, {params: body});
  }

}
