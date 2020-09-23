import { Component, OnInit } from '@angular/core';
import { PorqueProcurouAtendimento } from './porque-procurou-atendimento';

@Component({
  selector: 'app-porque-procurou-atendimento',
  templateUrl: './porque-procurou-atendimento.component.html',
  styleUrls: ['./porque-procurou-atendimento.component.css']
})
export class PorqueProcurouAtendimentoComponent {

  porqueProcurouAtendimento: PorqueProcurouAtendimento;

  constructor() {
    this.novo();
  }

  novo() {
    this.porqueProcurouAtendimento = new PorqueProcurouAtendimento();
  }

  marcarOutro() {
    this.novo();
    this.porqueProcurouAtendimento.atendMedOutro = true;
  }

  desmarcarOutro() {
    this.porqueProcurouAtendimento.atendMedOutro = false;
    this.porqueProcurouAtendimento.atendMedOutroEscrito = '';    
  }


}