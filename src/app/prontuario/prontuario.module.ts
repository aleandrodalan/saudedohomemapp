import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { ProntuarioFormComponent } from './prontuario-form/prontuario-form.component';
import { ProntuarioListaComponent } from './prontuario-lista/prontuario-lista.component';
import { AcuidadeVisualComponent } from '../questionario-auto-referido/acuidade-visual/acuidade-visual.component';
import { AlergiaComponent } from '../questionario-auto-referido/alergia/alergia.component';
import { AlgumProbSaudeNaoProcAtendComponent } from '../questionario-auto-referido/algum-prob-saude-nao-proc-atend/algum-prob-saude-nao-proc-atend.component';
import { UltimaVezProcAtenSaudeComponent } from '../questionario-auto-referido/ultima-vez-proc-aten-saude/ultima-vez-proc-aten-saude.component';
import { AtividadeFisicaComponent } from '../questionario-auto-referido/atividade-fisica/atividade-fisica.component';
import { FalarSaudeComHomemOuMulherComponent } from '../questionario-auto-referido/falar-saude-com-homem-ou-mulher/falar-saude-com-homem-ou-mulher.component';
import { BebidaAlcoolicaComponent } from '../questionario-auto-referido/bebida-alcoolica/bebida-alcoolica.component';
import { ComoResolveuTratouEsteProblemaComponent } from '../questionario-auto-referido/como-resolveu-tratou-este-problema/como-resolveu-tratou-este-problema.component';
import { QuandoConsultouDentistaComponent } from '../questionario-auto-referido/quando-consultou-dentista/quando-consultou-dentista.component';
import { ConsultouUrologistaComponent } from '../questionario-auto-referido/consultou-urologista/consultou-urologista.component';
import { DeficienciaComponent } from '../questionario-auto-referido/deficiencia/deficiencia.component';
import { GostAtendDirecHomensSeuBairroComponent } from '../questionario-auto-referido/gost-atend-direc-homens-seu-bairro/gost-atend-direc-homens-seu-bairro.component';
import { HorarioDiferenciadoAtendimentoComponent } from '../questionario-auto-referido/horario-diferenciado-atendimento/horario-diferenciado-atendimento.component';
import { HistoricoCancerComponent } from '../questionario-auto-referido/historico-cancer/historico-cancer.component';
import { HistoricoExamesComplementaresComponent } from '../questionario-auto-referido/historico-exames-complementares/historico-exames-complementares.component';
import { SabiaHomemPodeRealizarConsultaPreNatalComponent } from '../questionario-auto-referido/sabia-homem-pode-realizar-consulta-pre-natal/sabia-homem-pode-realizar-consulta-pre-natal.component';
import { MotivoNaoProcurarAtendimentoComponent } from '../questionario-auto-referido/motivo-nao-procurar-atendimento/motivo-nao-procurar-atendimento.component';
import { ParticipaGrupoPlanejFamiliarComponent } from '../questionario-auto-referido/participa-grupo-planej-familiar/participa-grupo-planej-familiar.component';
import { ProblemasGastricosComponent } from '../questionario-auto-referido/problemas-gastricos/problemas-gastricos.component';
import { ProblemasRenaisComponent } from '../questionario-auto-referido/problemas-renais/problemas-renais.component';
import { ProblemasRespiratoriosComponent } from '../questionario-auto-referido/problemas-respiratorios/problemas-respiratorios.component';
import { PorqueProcurouAtendimentoComponent } from '../questionario-auto-referido/porque-procurou-atendimento/porque-procurou-atendimento.component';
import { TabagismoComponent } from '../questionario-auto-referido/tabagismo/tabagismo.component';
import { TesteRapidoHepatiteComponent } from '../questionario-auto-referido/teste-rapido-hepatite/teste-rapido-hepatite.component';
import { TesteRapidoHivComponent } from '../questionario-auto-referido/teste-rapido-hiv/teste-rapido-hiv.component';
import { TesteRapidoSifilisComponent } from '../questionario-auto-referido/teste-rapido-sifilis/teste-rapido-sifilis.component';
import { CartaoVacinacaoComponent } from '../questionario-auto-referido/cartao-vacinacao/cartao-vacinacao.component';
import { VasectomiaComponent } from '../questionario-auto-referido/vasectomia/vasectomia.component';
import { ViolenciaComponent } from '../questionario-auto-referido/violencia/violencia.component';
import { HttpClientModule } from '@angular/common/http';
import { ProntuarioRoutingModule } from './prontuario-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    ProntuarioFormComponent, 
    ProntuarioListaComponent, 
    AcuidadeVisualComponent, 
    AlergiaComponent, 
    AlgumProbSaudeNaoProcAtendComponent, 
    UltimaVezProcAtenSaudeComponent, 
    AtividadeFisicaComponent, 
    FalarSaudeComHomemOuMulherComponent, 
    BebidaAlcoolicaComponent, 
    ComoResolveuTratouEsteProblemaComponent, 
    QuandoConsultouDentistaComponent, 
    ConsultouUrologistaComponent, 
    DeficienciaComponent, 
    GostAtendDirecHomensSeuBairroComponent, 
    HistoricoCancerComponent, 
    HistoricoExamesComplementaresComponent, 
    SabiaHomemPodeRealizarConsultaPreNatalComponent, 
    MotivoNaoProcurarAtendimentoComponent, 
    ParticipaGrupoPlanejFamiliarComponent, 
    ProblemasGastricosComponent, 
    ProblemasRenaisComponent, 
    ProblemasRespiratoriosComponent, 
    PorqueProcurouAtendimentoComponent, 
    TabagismoComponent, 
    TesteRapidoHepatiteComponent, 
    TesteRapidoHivComponent, 
    TesteRapidoSifilisComponent, 
    CartaoVacinacaoComponent, 
    VasectomiaComponent, 
    ViolenciaComponent,
    HorarioDiferenciadoAtendimentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule,
    ProntuarioRoutingModule,
    NgxPaginationModule,
    DropdownModule
  ],
  exports: [
    ProntuarioFormComponent,
    ProntuarioListaComponent
  ]
})
export class ProntuarioModule { }
