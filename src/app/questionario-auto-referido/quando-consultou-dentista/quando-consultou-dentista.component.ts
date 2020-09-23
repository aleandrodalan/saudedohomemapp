import { Component } from '@angular/core';
import { PeriodoConsultouDentista } from 'src/app/enums/periodo-consultou-dentista.enum';

@Component({
  selector: 'app-quando-consultou-dentista',
  templateUrl: './quando-consultou-dentista.component.html',
  styleUrls: ['./quando-consultou-dentista.component.css']
})
export class QuandoConsultouDentistaComponent {

  quandoConsultouDentista: PeriodoConsultouDentista;

  constructor() {
  }
}