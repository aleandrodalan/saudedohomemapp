import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UnidadeSaude } from '../unidade-saude';
import { UnidadeSaudeService } from '../unidade-saude.service';

@Component({
  selector: 'app-unidade-saude-lista',
  templateUrl: './unidade-saude-lista.component.html',
  styleUrls: ['./unidade-saude-lista.component.css']
})
export class UnidadeSaudeListaComponent implements OnInit {

  unidadesSaude: UnidadeSaude[] = [];
  unidadeSaudeSelecionada: UnidadeSaude;

  messageSuccess: string;
  messageError: string;

  paginaAtual = 1;
  contador = 5;  

  constructor(private unidadeSaudeService: UnidadeSaudeService,
              private router: Router) { }

  ngOnInit(): void {
    this.unidadeSaudeService
      .getUnidadesSaude()
      .subscribe(unidades => this.unidadesSaude = unidades);
  }

  preparaExclusao(unidadeSaude: UnidadeSaude) {
    this.unidadeSaudeSelecionada = unidadeSaude;
  }

  excluirUnidadeSaude() {
    this.unidadeSaudeService
      .deleteUnidadeSaude(this.unidadeSaudeSelecionada)
      .subscribe(
        response => {
          this.messageSuccess = 'Unidade de Saúde excluída com sucesso!';
          this.ngOnInit();
        },  
        responseError => this.messageError = responseError.error.errors
      )
  }  

  buscarUnidadeSaudePorNome(nome: string) {
    if (nome == '') {
      this.ngOnInit();
    } else {    
      this.unidadeSaudeService
        .getUnidadeSaudeByNome(nome)
        .subscribe(
          response => { 
            this.unidadesSaude = response;
            console.log(response);
          },
          responseError => this.unidadesSaude
        );
    }
  }  
}