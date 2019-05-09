import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TodosTrueComponent } from './todos-true/todos-true.component';

const routes: Routes = [
  {path: '', redirectTo :'/mostrarUsuarios', pathMatch: 'full'},
  { path: 'mostrarUsuarios', component: UsuariosComponent},
  { path: 'mostrarToDos/:idUsuario/:completed', component: TodosTrueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
