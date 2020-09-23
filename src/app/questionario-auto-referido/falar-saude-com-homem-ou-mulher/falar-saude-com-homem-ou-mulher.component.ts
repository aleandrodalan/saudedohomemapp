import { Component } from '@angular/core';
import { FalarSaudeComHomemOuMulher } from './falar-saude-com-homem-ou-mulher';

@Component({
  selector: 'app-falar-saude-com-homem-ou-mulher',
  templateUrl: './falar-saude-com-homem-ou-mulher.component.html',
  styleUrls: ['./falar-saude-com-homem-ou-mulher.component.css']
})
export class FalarSaudeComHomemOuMulherComponent {

  falarSaudeComHomemOuMulher: FalarSaudeComHomemOuMulher;

  constructor() {
    this.novo();
  }

  private novo() {
    this.falarSaudeComHomemOuMulher = new FalarSaudeComHomemOuMulher();
  }

  marcarSim() {
    this.novo();
    this.falarSaudeComHomemOuMulher.avontadeFalarSaudeComHomemMulher = true;    
  }

  desmarcarOutro() {
    this.falarSaudeComHomemOuMulher.qualOutroFalarSaude = '';
  }
}