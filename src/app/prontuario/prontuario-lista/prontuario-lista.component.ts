import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Prontuario } from '../prontuario';
import { ProntuarioService } from '../prontuario.service';

@Component({
  selector: 'app-prontuario-lista',
  templateUrl: './prontuario-lista.component.html',
  styleUrls: ['./prontuario-lista.component.css']
})
export class ProntuarioListaComponent implements OnInit {

  prontuarios: Prontuario[] = [];
  prontuarioSelecionado: Prontuario;

  messageSuccess: string;
  messageError: string;

  paginaAtual = 1;
  contador = 5;  

  constructor(private prontuarioService: ProntuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.prontuarioService
      .getProntuarios()
      .subscribe(prontuarios => {
        this.prontuarios = prontuarios;
      })  
  }

  preparaExclusao(prontuario: Prontuario) {
    this.prontuarioSelecionado = prontuario;
  }

  excluirProntuario() {
    this.prontuarioService
      .deleteProntuario(this.prontuarioSelecionado)
      .subscribe(
        response => {
          this.messageSuccess = 'Prontuário excluído com sucesso!';
          this.ngOnInit();
        },  
        responseError => this.messageError = responseError.error.errors
      )
  }  

  buscarProntuarioPorNomePaciente(nome: string) {
    if (nome == '') {
      this.ngOnInit();
    } else {    
      this.prontuarioService
        .getProntuariosByPacienteName(nome)
        .subscribe(
          response => { 
            this.prontuarios = response;
            console.log(response);
          },
          responseError => this.prontuarios
        );
    }
  }
}