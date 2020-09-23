import { Component, OnInit } from '@angular/core';
import { ParticipaGrupoPlanejFamiliar } from './participa-grupo-planej-familiar';

@Component({
  selector: 'app-participa-grupo-planej-familiar',
  templateUrl: './participa-grupo-planej-familiar.component.html',
  styleUrls: ['./participa-grupo-planej-familiar.component.css']
})
export class ParticipaGrupoPlanejFamiliarComponent {

  participaGrupoPlanejFamiliar: ParticipaGrupoPlanejFamiliar;

  constructor() {
    this.novo();
  }

  marcarSim() {
    this.novo();
    this.participaGrupoPlanejFamiliar.participaPlanejamentoFamiliar = true;
  }

  novo() {
    this.participaGrupoPlanejFamiliar = new ParticipaGrupoPlanejFamiliar();    
  }
}