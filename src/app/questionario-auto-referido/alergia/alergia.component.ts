import { Component, OnInit } from '@angular/core';
import { Alergia } from './alergia';

@Component({
  selector: 'app-alergia',
  templateUrl: './alergia.component.html',
  styleUrls: ['./alergia.component.css']
})
export class AlergiaComponent {

  public alergia: Alergia;

  constructor() {
    this.novo();
  }

  marcarNao() {
    this.novo();
    this.alergia.possuiAlergia = false;
  }

  private novo() {
    this.alergia = new Alergia();    
  }

  marcarOutro() {
    this.novo();
    this.alergia.possuiAlergia = true;
    this.alergia.alergiaOutra = true;
  }

  desmarcarOutro() {
    this.alergia.alergiaOutra = false;
    this.alergia.qualOutraAlergia = '';    
  }
}
