import { Component } from '@angular/core';
import { HorarioDiferenciadoAtendimento } from './horario-diferenciado-atendimento';

@Component({
  selector: 'app-horario-diferenciado-atendimento',
  templateUrl: './horario-diferenciado-atendimento.component.html',
  styleUrls: ['./horario-diferenciado-atendimento.component.css']
})
export class HorarioDiferenciadoAtendimentoComponent {

  horarioDiferenciadoAtendimento: HorarioDiferenciadoAtendimento;

  constructor() {
    this.novo();
  }

  marcarNao() {
    this.novo();
    this.horarioDiferenciadoAtendimento.gostariaTivesseHorarioDiferenciadoAtend = false;    
  }

  novo() {
    this.horarioDiferenciadoAtendimento = new HorarioDiferenciadoAtendimento();    
  }
}