import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TodosTrueComponent } from './todos-true/todos-true.component';
import { TodosFalseComponent } from './todos-false/todos-false.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TodosTrueComponent,
    TodosFalseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
