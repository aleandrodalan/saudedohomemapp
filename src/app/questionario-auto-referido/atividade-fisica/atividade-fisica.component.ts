import { Component } from '@angular/core';
import { AtividadeFisica } from './atividade-fisica';

@Component({
  selector: 'app-atividade-fisica',
  templateUrl: './atividade-fisica.component.html',
  styleUrls: ['./atividade-fisica.component.css']
})
export class AtividadeFisicaComponent {

  atividadeFisica: AtividadeFisica;

  constructor() {
    this.novo();
  }

  marcarNao() {
    this.novo();
    this.atividadeFisica.praticaAtividadeFisica = false;
  }

  private novo() {
    this.atividadeFisica = new AtividadeFisica();    
  }
}