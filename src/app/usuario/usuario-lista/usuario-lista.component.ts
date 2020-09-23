import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioSelecionado: Usuario;

  messageSuccess: string;
  messageError: string;

  paginaAtual = 1;
  contador = 5;

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.usuarioService
      .getUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

  preparaExclusao(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
  }

  excluirUsuario() {
    this.usuarioService
      .deleteUsuario(this.usuarioSelecionado)
      .subscribe(
        response => {
          this.messageSuccess = 'Usuário excluído com sucesso!';
          this.ngOnInit();
        },  
        responseError => this.messageError = responseError.error.errors
      )
  }

  buscarUsuarioPorLogin(login: string) {
    if (login == '') {
      this.ngOnInit();
    } else {    
      this.usuarioService
        .getUsuarioByLogin(login)
        .subscribe(
          response => { 
            this.usuarios = response;
            console.log(response);
          },
          responseError => this.usuarios
        );
    }
  }
}