import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Usuario } from '../usuario';
import { Pessoa } from '../../pessoa/pessoa';

import { GrupoAcesso } from '../../enums/grupo-acesso.enum';
import { Status } from '../../enums/status.enum';

import { UsuarioService } from '../usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario;

  id: number;

  success: boolean = false;
  errors: string[];

  enumGrupos: any[] = [];
  enumStatus: any[] = [];

  constructor(private usuarioService: UsuarioService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.adicionarNovoUsuario();

    for (let grupo in GrupoAcesso) {
      if (isNaN(Number(grupo))) {
        this.enumGrupos.push({text: GrupoAcesso[grupo], value: grupo});
      }
    }

    for (let status in Status) {
      if (isNaN(Number(status))) {
        this.enumStatus.push({text:  Status[status], value: status});
      }
    }    

    let params: Observable<Params> = this.activatedRoute.params;
    
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      
      if (this.id) {
        this.usuarioService
          .getUsuarioById(this.id)
          .subscribe(
            response => { 
              this.usuario = response;
            
              if (this.usuario.pessoa == null)
                this.usuario.pessoa = new Pessoa();
            },
            errorResponse => this.usuario = new Usuario()
          )      
      } 
    })
  }

  adicionarNovoUsuario(): void {
    this.usuario = new Usuario();
  }

  salvarUsuario() {
    if (this.id) {
      this.usuarioService
        .updateUsuario(this.usuario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.adicionarNovoUsuario();
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })
    } else {
      this.usuarioService
        .saveUsuario(this.usuario)
        .subscribe(response => {
          this.success = true; 
          this.errors = null;   
          this.adicionarNovoUsuario();        
        }, errorResponse => {
          console.log(errorResponse);
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }
  }

  onSubmit() {
    this.salvarUsuario();    
  }
}