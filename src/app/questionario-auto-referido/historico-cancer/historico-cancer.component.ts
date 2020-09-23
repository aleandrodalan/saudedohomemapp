import { Component, OnInit } from '@angular/core';
import { HistoricoCancer } from './historico-cancer';

@Component({
  selector: 'app-historico-cancer',
  templateUrl: './historico-cancer.component.html',
  styleUrls: ['./historico-cancer.component.css']
})
export class HistoricoCancerComponent {

  historicoCancer: HistoricoCancer;

  constructor() {
    this.novo();
  }

  marcarSim() {
    this.novo();
    this.historicoCancer.historicoFamiliarCancer = false;
  }

  novo() {
    this.historicoCancer = new HistoricoCancer();
  }
}