import { Component } from '@angular/core';
import { Violencia } from './violencia';

@Component({
  selector: 'app-violencia',
  templateUrl: './violencia.component.html',
  styleUrls: ['./violencia.component.css']
})
export class ViolenciaComponent {

  violencia: Violencia;

  constructor() {
    this.novo();
  }

  marcarNao() {
    this.novo();
    this.violencia.sofreuViolencia = false;
  }

  private novo() {
    this.violencia = new Violencia();    
  }

}