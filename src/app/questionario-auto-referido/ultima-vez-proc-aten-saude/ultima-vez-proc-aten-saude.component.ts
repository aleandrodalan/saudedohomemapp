import { Component, OnInit } from '@angular/core';
import { ProcurouAtendimentoSaude } from 'src/app/enums/procurou-atendimento-saude.enum';

@Component({
  selector: 'app-ultima-vez-proc-aten-saude',
  templateUrl: './ultima-vez-proc-aten-saude.component.html',
  styleUrls: ['./ultima-vez-proc-aten-saude.component.css']
})
export class UltimaVezProcAtenSaudeComponent {

  procurouAtendSaude: ProcurouAtendimentoSaude;

  constructor() { }
}