import { Component, OnInit } from '@angular/core';
import { ComoResolveuTratouEsteProblema } from './como-resolveu-tratou-este-problema';

@Component({
  selector: 'app-como-resolveu-tratou-este-problema',
  templateUrl: './como-resolveu-tratou-este-problema.component.html',
  styleUrls: ['./como-resolveu-tratou-este-problema.component.css']
})
export class ComoResolveuTratouEsteProblemaComponent {

  comoResolveuTratouEsteProblema: ComoResolveuTratouEsteProblema;

  constructor() {
    this.novo();
  }

  private novo() {
    this.comoResolveuTratouEsteProblema = new ComoResolveuTratouEsteProblema();    
  }

  marcarOutro() {
    this.novo();
    this.comoResolveuTratouEsteProblema.outroComoTratouProblema = true;
  }

  desmarcarOutro() {
    this.comoResolveuTratouEsteProblema.outroComoTratouProblema = false;
    this.comoResolveuTratouEsteProblema.qualOutroComoTratouProblema = '';    
  }
}