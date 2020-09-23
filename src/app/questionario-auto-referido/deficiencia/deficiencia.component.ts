import { Component } from '@angular/core';
import { Deficiencia } from './deficiencia';

@Component({
  selector: 'app-deficiencia',
  templateUrl: './deficiencia.component.html',
  styleUrls: ['./deficiencia.component.css']
})
export class DeficienciaComponent {

  deficiencia: Deficiencia;

  constructor() {
    this.novo();
  }

  marcarNao() {
    this.novo();
    this.deficiencia.possuiDeficiencia = false;
  }

  private novo() {
    this.deficiencia = new Deficiencia();    
  }
}