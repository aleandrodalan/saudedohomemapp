import { Component, OnInit } from '@angular/core';
import { Tabagismo } from './tabagismo';

@Component({
  selector: 'app-tabagismo',
  templateUrl: './tabagismo.component.html',
  styleUrls: ['./tabagismo.component.css']
})
export class TabagismoComponent {

  tabagismo: Tabagismo;

  constructor() {
    this.novo();
  }

  marcarSim() {
    this.novo();
    this.tabagismo.ehTabagista = true;
  }

  novo() {
    this.tabagismo = new Tabagismo();    
  }
}