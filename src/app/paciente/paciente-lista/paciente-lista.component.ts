import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-lista',
  templateUrl: './paciente-lista.component.html',
  styleUrls: ['./paciente-lista.component.css']
})
export class PacienteListaComponent implements OnInit {

  pacientes: Paciente[] = [];
  pacienteSelecionado: Paciente;

  messageSuccess: string;
  messageError: string;

  paginaAtual = 1;
  contador = 5;  

  constructor(private pacienteService: PacienteService,
              private router: Router) { }

  ngOnInit(): void {
    this.pacienteService
      .getPacientes()
      .subscribe(pacientes => this.pacientes = pacientes);
  }

  preparaExclusao(paciente: Paciente) {
    this.pacienteSelecionado = paciente;
  }  

  excluirPaciente() {
    this.pacienteService
      .deletePaciente(this.pacienteSelecionado)
      .subscribe(
        response => {
          this.messageSuccess = 'Paciente excluído com sucesso!';
          this.ngOnInit();
        },  
        responseError => { 
          this.messageError = responseError.error.errors;
        }
      )
  }

  buscarPacientesPorNome(nome: string) {
    if (nome == '') {
      this.ngOnInit();
    } else {    
      this.pacienteService
        .getPacientesByNome(nome)
        .subscribe(
          response => { 
            this.pacientes = response;
            console.log(response);
          },
          responseError => this.pacientes
        );
    }
  }
}