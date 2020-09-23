import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Pessoa } from 'src/app/pessoa/pessoa';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';

import { Observable } from 'rxjs';

import { RacaCor } from 'src/app/enums/raca-cor.enum';
import { Escolaridade } from 'src/app/enums/escolaridade.enum';
import { OrientacaoSexual } from 'src/app/enums/orientacao-sexual.enum';
import { EstadoCivil } from 'src/app/enums/estado-civil.enum';

import { EnderecoService } from 'src/app/endereco/endereco.service';
import { DadosSocioDemograficos } from 'src/app/dados-socio-demograficos/dados-socio-demograficos';
import { Endereco } from 'src/app/endereco/endereco';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  data: Date;
  paciente: Paciente;

  id: number;

  success: boolean = false;
  errors: string[];

  enumRacasCor: any[] = [];
  enumEscolaridade: any[] = [];
  enumEstadoCivil: any[] = [];
  enumOrientacaoSexual: any[] = [];

  constructor(private pacienteService: PacienteService,
              private enderecoService: EnderecoService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.adicionarNovoPaciente();

    for (let racaCor in RacaCor) {
      if (isNaN(Number(racaCor))) {
        this.enumRacasCor.push({text: RacaCor[racaCor], value: racaCor});
      }
    }

    for (let escolaridade in Escolaridade) {
      if (isNaN(Number(escolaridade))) {
        this.enumEscolaridade.push({text: Escolaridade[escolaridade], value: escolaridade});
      }
    }

    for (let estadoCivil in EstadoCivil) {
      if (isNaN(Number(estadoCivil))) {
        this.enumEstadoCivil.push({text: EstadoCivil[estadoCivil], value: estadoCivil});
      }
    }

    for (let orientacaoSexual in OrientacaoSexual) {
      if (isNaN(Number(orientacaoSexual))) {
        this.enumOrientacaoSexual.push({text: OrientacaoSexual[orientacaoSexual], value: orientacaoSexual});
      }
    }

    let params: Observable<Params> = this.activatedRoute.params;
    
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      
      if (this.id) {
        this.pacienteService
          .getPacienteById(this.id)
          .subscribe(
            response => {
              this.paciente = response

              if (this.paciente.dadosSocioDemograficos == null)
                this.paciente.dadosSocioDemograficos = new DadosSocioDemograficos();
              
              if (this.paciente.endereco == null)
                this.paciente.endereco = new Endereco();

              if (this.paciente.pessoa == null)
                this.paciente.pessoa = new Pessoa();
            },
            errorResponse => this.paciente = new Paciente()
          )      
      } 
    })    
  }

  adicionarNovoPaciente(): void {
    this.paciente = new Paciente();
  }

  salvarPaciente() {
    if (this.id) {
      this.pacienteService
        .updatePaciente(this.paciente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.adicionarNovoPaciente();
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })
    } else {
      this.pacienteService
        .savePaciente(this.paciente)
        .subscribe(response => {
          console.log(response);          
          this.success = true; 
          this.errors = null;   
          this.adicionarNovoPaciente();        
        }, errorResponse => {
          console.log(errorResponse);          
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }
  }

  onSubmit() {
    this.salvarPaciente();
  }

  onBlurCep() {
    this.enderecoService
      .getEnderecoByCepRest(this.paciente.endereco.cep)
      .subscribe(response => this.paciente.endereco = response);
  }
  
  calcularIdade(dataNascimento: string) {
    if (dataNascimento != null) {
      let idade: number;

      let anoAtual: number = new Date().getFullYear();
      let mesAtual: number = new Date().getMonth() + 1;
      let diaAtual: number = new Date().getDate();

      let diaNascimento: number = parseInt(dataNascimento.substr(0, 2));    
      let mesNascimento: number = parseInt(dataNascimento.substr(2, 2));    
      let anoNascimento: number = parseInt(dataNascimento.substr(4, 4));

      if (mesNascimento < mesAtual) {
        idade = (anoAtual - anoNascimento);
      } else {
        if (mesNascimento > mesAtual) {
          idade = ((anoAtual - anoNascimento) - 1);
        } else {
          if (diaNascimento <= diaAtual) {
            idade = (anoAtual - anoNascimento);
          } else {
            idade = ((anoAtual - anoNascimento) - 1);
          }
        }
      }

      this.paciente.idade = idade;
    }
  }
}