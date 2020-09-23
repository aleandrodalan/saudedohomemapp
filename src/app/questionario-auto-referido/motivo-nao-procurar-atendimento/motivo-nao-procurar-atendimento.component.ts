import { Component, OnInit } from '@angular/core';
import { MotivoNaoProcurarAtendimento } from './motivo-nao-procurar-atendimento';

@Component({
  selector: 'app-motivo-nao-procurar-atendimento',
  templateUrl: './motivo-nao-procurar-atendimento.component.html',
  styleUrls: ['./motivo-nao-procurar-atendimento.component.css']
})
export class MotivoNaoProcurarAtendimentoComponent {

  motivoNaoProcurarAtendimento: MotivoNaoProcurarAtendimento;
  
  constructor() {
    this.novo();
  }

  private novo() {
    this.motivoNaoProcurarAtendimento = new MotivoNaoProcurarAtendimento();    
  }

  marcarOutro() {
    this.novo();
    this.motivoNaoProcurarAtendimento.outroMotivoNaoProcAten = true;
  }

  desmarcarOutro() {
    this.motivoNaoProcurarAtendimento.outroMotivoNaoProcAten = false;
    this.motivoNaoProcurarAtendimento.outroMotivo = '';
  }
}