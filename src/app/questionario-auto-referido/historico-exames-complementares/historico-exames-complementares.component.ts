import { Component, OnInit } from '@angular/core';
import { QuestionarioAutoReferido } from '../questionario-auto-referido';

@Component({
  selector: 'app-historico-exames-complementares',
  templateUrl: './historico-exames-complementares.component.html',
  styleUrls: ['./historico-exames-complementares.component.css']
})
export class HistoricoExamesComplementaresComponent {

  historicoExamesComplementares: string;

  constructor() {
  }
}