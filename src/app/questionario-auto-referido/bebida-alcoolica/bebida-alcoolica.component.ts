import { Component } from '@angular/core';
import { BebidaAlcoolica } from './bebida-alcoolica';

@Component({
  selector: 'app-bebida-alcoolica',
  templateUrl: './bebida-alcoolica.component.html',
  styleUrls: ['./bebida-alcoolica.component.css']
})
export class BebidaAlcoolicaComponent {

  bebidaAlcoolica: BebidaAlcoolica;

  constructor() {
    this.novo();
  }

  marcarNao() {
    this.novo();
    this.bebidaAlcoolica.fazUsoBebidaAlcoolica = false;
  }

  private novo() {
    this.bebidaAlcoolica = new BebidaAlcoolica(); 
  }
}