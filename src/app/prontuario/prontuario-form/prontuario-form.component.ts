import { Component, OnInit, ViewChild } from '@angular/core';
import { Prontuario } from '../prontuario';
import { ProntuarioService } from '../prontuario.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/paciente/paciente';
import { QuestionarioAutoReferido } from 'src/app/questionario-auto-referido/questionario-auto-referido';
import { UnidadeSaude } from 'src/app/unidade-saude/unidade-saude';
import { PacienteService } from 'src/app/paciente/paciente.service';
import { UnidadeSaudeService } from 'src/app/unidade-saude/unidade-saude.service';
import { DateFormatPortuguesePipe } from 'src/app/pipe/date-format-portuguese.pipe';
import { CartaoVacinacaoComponent } from 'src/app/questionario-auto-referido/cartao-vacinacao/cartao-vacinacao.component';
import { FalarSaudeComHomemOuMulherComponent } from 'src/app/questionario-auto-referido/falar-saude-com-homem-ou-mulher/falar-saude-com-homem-ou-mulher.component';
import { AcuidadeVisualComponent } from 'src/app/questionario-auto-referido/acuidade-visual/acuidade-visual.component';
import { AlergiaComponent } from 'src/app/questionario-auto-referido/alergia/alergia.component';
import { AlgumProbSaudeNaoProcAtendComponent } from 'src/app/questionario-auto-referido/algum-prob-saude-nao-proc-atend/algum-prob-saude-nao-proc-atend.component';
import { ComoResolveuTratouEsteProblemaComponent } from 'src/app/questionario-auto-referido/como-resolveu-tratou-este-problema/como-resolveu-tratou-este-problema.component';
import { QuandoConsultouDentistaComponent } from 'src/app/questionario-auto-referido/quando-consultou-dentista/quando-consultou-dentista.component';
import { ConsultouUrologistaComponent } from 'src/app/questionario-auto-referido/consultou-urologista/consultou-urologista.component';
import { DeficienciaComponent } from 'src/app/questionario-auto-referido/deficiencia/deficiencia.component';
import { TabagismoComponent } from 'src/app/questionario-auto-referido/tabagismo/tabagismo.component';
import { VasectomiaComponent } from 'src/app/questionario-auto-referido/vasectomia/vasectomia.component';
import { BebidaAlcoolicaComponent } from 'src/app/questionario-auto-referido/bebida-alcoolica/bebida-alcoolica.component';
import { GostAtendDirecHomensSeuBairroComponent } from 'src/app/questionario-auto-referido/gost-atend-direc-homens-seu-bairro/gost-atend-direc-homens-seu-bairro.component';
import { HorarioDiferenciadoAtendimentoComponent } from 'src/app/questionario-auto-referido/horario-diferenciado-atendimento/horario-diferenciado-atendimento.component';
import { HistoricoCancerComponent } from 'src/app/questionario-auto-referido/historico-cancer/historico-cancer.component';
import { HistoricoExamesComplementaresComponent } from 'src/app/questionario-auto-referido/historico-exames-complementares/historico-exames-complementares.component';
import { ViolenciaComponent } from 'src/app/questionario-auto-referido/violencia/violencia.component';
import { ProblemasGastricosComponent } from 'src/app/questionario-auto-referido/problemas-gastricos/problemas-gastricos.component';
import { ProblemasRenaisComponent } from 'src/app/questionario-auto-referido/problemas-renais/problemas-renais.component';
import { ProblemasRespiratoriosComponent } from 'src/app/questionario-auto-referido/problemas-respiratorios/problemas-respiratorios.component';
import { MotivoNaoProcurarAtendimentoComponent } from 'src/app/questionario-auto-referido/motivo-nao-procurar-atendimento/motivo-nao-procurar-atendimento.component';
import { ParticipaGrupoPlanejFamiliarComponent } from 'src/app/questionario-auto-referido/participa-grupo-planej-familiar/participa-grupo-planej-familiar.component';
import { PorqueProcurouAtendimentoComponent } from 'src/app/questionario-auto-referido/porque-procurou-atendimento/porque-procurou-atendimento.component';
import { AtividadeFisicaComponent } from 'src/app/questionario-auto-referido/atividade-fisica/atividade-fisica.component';
import { SabiaHomemPodeRealizarConsultaPreNatalComponent } from 'src/app/questionario-auto-referido/sabia-homem-pode-realizar-consulta-pre-natal/sabia-homem-pode-realizar-consulta-pre-natal.component';
import { TesteRapidoHepatiteComponent } from 'src/app/questionario-auto-referido/teste-rapido-hepatite/teste-rapido-hepatite.component';
import { TesteRapidoHivComponent } from 'src/app/questionario-auto-referido/teste-rapido-hiv/teste-rapido-hiv.component';
import { TesteRapidoSifilisComponent } from 'src/app/questionario-auto-referido/teste-rapido-sifilis/teste-rapido-sifilis.component';
import { UltimaVezProcAtenSaudeComponent } from 'src/app/questionario-auto-referido/ultima-vez-proc-aten-saude/ultima-vez-proc-aten-saude.component';
import { PacienteRoutingModule } from 'src/app/paciente/paciente-routing.module';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'app-prontuario-form',
  templateUrl: './prontuario-form.component.html',
  styleUrls: ['./prontuario-form.component.css']
})
export class ProntuarioFormComponent implements OnInit {

  @ViewChild(FalarSaudeComHomemOuMulherComponent)
  private falarSaudeComHomemOuMulherComponent = new FalarSaudeComHomemOuMulherComponent();

  @ViewChild(AcuidadeVisualComponent)
  private acuidadeVisualComponent = new AcuidadeVisualComponent();

  @ViewChild(AlergiaComponent)
  private alergiaComponent: AlergiaComponent;

  @ViewChild(AlgumProbSaudeNaoProcAtendComponent)
  private algumProbSaudeNaoProcAtendComponent = new AlgumProbSaudeNaoProcAtendComponent();

  @ViewChild(ComoResolveuTratouEsteProblemaComponent)
  private comoResolveuTratouEsteProblemaComponent = new ComoResolveuTratouEsteProblemaComponent();

  @ViewChild(QuandoConsultouDentistaComponent)
  private quandoConsultouDentistaComponent = new QuandoConsultouDentistaComponent();

  @ViewChild(ConsultouUrologistaComponent)
  private consultouUrologistaComponent = new ConsultouUrologistaComponent();

  @ViewChild(DeficienciaComponent)
  private deficienciaComponent = new DeficienciaComponent();

  @ViewChild(TabagismoComponent)
  private tabagismoComponent = new TabagismoComponent();

  @ViewChild(VasectomiaComponent)
  private vasectomiaComponent = new VasectomiaComponent();

  @ViewChild(BebidaAlcoolicaComponent)
  private bebidaAlcoolicaComponent = new BebidaAlcoolicaComponent();

  @ViewChild(GostAtendDirecHomensSeuBairroComponent)
  private gostAtendDirecHomensSeuBairroComponent = new GostAtendDirecHomensSeuBairroComponent();

  @ViewChild(HorarioDiferenciadoAtendimentoComponent)
  private horarioDiferenciadoAtendimentoComponent = new HorarioDiferenciadoAtendimentoComponent();

  @ViewChild(HistoricoCancerComponent)
  private historicoCancerComponent = new HistoricoCancerComponent();

  @ViewChild(HistoricoExamesComplementaresComponent)
  private historicoExamesComplementaresComponent = new HistoricoExamesComplementaresComponent();

  @ViewChild(ViolenciaComponent)
  private ViolenciaComponent = new ViolenciaComponent();

  @ViewChild(ProblemasGastricosComponent)
  private problemasGastricosComponent = new ProblemasGastricosComponent();

  @ViewChild(ProblemasRenaisComponent)
  private problemasRenaisComponent = new ProblemasRenaisComponent();

  @ViewChild(ProblemasRespiratoriosComponent)
  private problemasRespiratoriosComponent = new ProblemasRespiratoriosComponent();

  @ViewChild(MotivoNaoProcurarAtendimentoComponent)
  private motivoNaoProcurarAtendimentoComponent = new MotivoNaoProcurarAtendimentoComponent();

  @ViewChild(ParticipaGrupoPlanejFamiliarComponent)
  private participaGrupoPlanejFamiliarComponent = new ParticipaGrupoPlanejFamiliarComponent();

  @ViewChild(PorqueProcurouAtendimentoComponent)
  private porqueProcurouAtendimentoComponent = new PorqueProcurouAtendimentoComponent();

  @ViewChild(CartaoVacinacaoComponent)
  private cartaoVacinacaoComponent = new CartaoVacinacaoComponent();

  @ViewChild(AtividadeFisicaComponent)
  private atividadeFisicaComponent = new AtividadeFisicaComponent();

  @ViewChild(SabiaHomemPodeRealizarConsultaPreNatalComponent)
  private sabiaHomemPodeRealizarConsultaPreNatalComponent = new SabiaHomemPodeRealizarConsultaPreNatalComponent();

  @ViewChild(TesteRapidoHepatiteComponent)
  private testeRapidoHepatiteComponent = new TesteRapidoHepatiteComponent();

  @ViewChild(TesteRapidoHivComponent)
  private testeRapidoHivComponent = new TesteRapidoHivComponent();

  @ViewChild(TesteRapidoSifilisComponent)
  private testeRapidoSifilisComponent = new TesteRapidoSifilisComponent();

  @ViewChild(UltimaVezProcAtenSaudeComponent)
  private ultimaVezProcAtenSaudeComponent = new UltimaVezProcAtenSaudeComponent();

  prontuario: Prontuario;

  pacientes: any[];  
  unidadesSaude: any[];

  id: number;

  success: boolean = false;
  errors: string[];

  constructor(private prontuarioService: ProntuarioService,
              private activatedRoute: ActivatedRoute,
              private pacienteService: PacienteService,
              private unidadeSaudeService: UnidadeSaudeService,
              private dateFormatPortuguesePipe: DateFormatPortuguesePipe) {}

  ngOnInit(): void {
    this.adicionarNovoProntuario();
    this.buscarPacientes();
    this.buscarUnidadesSaude();

    let params: Observable<Params> = this.activatedRoute.params;
    
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      
      if (this.id) {
        this.prontuarioService
          .getProntuarioById(this.id)
          .subscribe(
            response => {
              console.log(response);

              this.prontuario = response;

              if (this.prontuario.paciente == null)
                this.prontuario.paciente = new Paciente();
              
              if (this.prontuario.unidadeSaude == null)
                this.prontuario.unidadeSaude = new UnidadeSaude();

              if (this.prontuario.questionario == null)
                this.prontuario.questionario = new QuestionarioAutoReferido();

              this.carregarComposicaoProntuarioEditar(response);                
            },
            errorResponse => this.prontuario = new Prontuario()
          )
      } 
    })    
  }

  adicionarNovoProntuario(): void {
    this.prontuario = new Prontuario();
    this.prontuario.dataColeta = this.dateFormatPortuguesePipe.transform(new Date());
  }  

  onSubmit() {
    this.carregarComposicaoProntuarioSalvar();
    this.salvarProntuario();
  }

  cliqueDadosGerais(aba: string) {
    $('.nav-tabs a[href="#' + aba + '"]').tab('show');
  }

  buscarPacientes() {
    this.pacienteService
      .getPacientes()
      .subscribe(
        response => { 
          this.pacientes = response.map(paciente => ({label: paciente.pessoa.nome + ' - CPF: ' + 
                                                             paciente.pessoa.cpf + ' - SUS: ' +
                                                             paciente.numeroCartaoSus,
                                                      value: paciente.id})) ;
        }
      )
  }

  buscarUnidadesSaude() {
    this.unidadeSaudeService
      .getUnidadesSaude()
      .subscribe(
        response => {
          this.unidadesSaude = response.map(unidades => ({label: unidades.nome + ' - Bairro: ' +
                                                                 unidades.endereco.bairro,
                                                          value: unidades.id}))
        }
      )
  }
  
  salvarProntuario() {
    if (this.id) {
      this.prontuarioService
        .updateProntuario(this.prontuario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.adicionarNovoProntuario();
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })
    } else {
      this.prontuarioService
        .saveProntuario(this.prontuario)
        .subscribe(response => {
          this.success = true; 
          this.errors = null;   
          this.adicionarNovoProntuario();        
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }
  }

  calcularImc(peso: string, altura: string) {
    this.prontuario.imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2).toString();
  }

  carregarComposicaoProntuarioSalvar() {
    this.prontuario.questionario.falarSaudeComHomemOuMulher = 
      this.falarSaudeComHomemOuMulherComponent.falarSaudeComHomemOuMulher;

    this.prontuario.questionario.acuidadeVisual =
      this.acuidadeVisualComponent.acuidadeVisual;

    this.prontuario.questionario.alergia =
      this.alergiaComponent.alergia;  

    this.prontuario.questionario.ultimoAnoProblemaSaudeNaoProcurouAtendimento =
      this.algumProbSaudeNaoProcAtendComponent.ultimoAnoProblemaSaudeNaoProcurouAtendimento;  

    this.prontuario.questionario.comoResolveuTratouEsteProblema =
      this.comoResolveuTratouEsteProblemaComponent.comoResolveuTratouEsteProblema;  

    this.prontuario.questionario.quandoConsultouDentista =
      this.quandoConsultouDentistaComponent.quandoConsultouDentista;

    this.prontuario.questionario.consultouUrologista =
      this.consultouUrologistaComponent.consultouUrologista;

    this.prontuario.questionario.deficiencia =
      this.deficienciaComponent.deficiencia;

    this.prontuario.questionario.tabagismo = 
      this.tabagismoComponent.tabagismo;  

    this.prontuario.questionario.vasectomia =
      this.vasectomiaComponent.vasectomia;
      
    this.prontuario.questionario.bebidaAlcoolica =
      this.bebidaAlcoolicaComponent.bebidaAlcoolica; 

    this.prontuario.questionario.gostAtendDirecHomemSeuBairro =
      this.gostAtendDirecHomensSeuBairroComponent.gostAtendDirecHomemSeuBairro;

    this.prontuario.questionario.horarioDiferenciadoAtendimento =
      this.horarioDiferenciadoAtendimentoComponent.horarioDiferenciadoAtendimento;

    this.prontuario.questionario.historicoCancer =
      this.historicoCancerComponent.historicoCancer;

    this.prontuario.questionario.historicoExamesComplementares =
      this.historicoExamesComplementaresComponent.historicoExamesComplementares;
      
    this.prontuario.questionario.violencia =
      this.ViolenciaComponent.violencia;
      
    this.prontuario.questionario.teveProblemasGastricos =
      this.problemasGastricosComponent.teveProblemasGastricos;

    this.prontuario.questionario.teveProblemasRenais =
      this.problemasRenaisComponent.teveProblemasRenais;

    this.prontuario.questionario.teveProblemasRespiratorios =
      this.problemasRespiratoriosComponent.teveProblemasRespiratorios;

    this.prontuario.questionario.motivoNaoProcurarAtendimento =
      this.motivoNaoProcurarAtendimentoComponent.motivoNaoProcurarAtendimento;
 
    this.prontuario.questionario.participaGrupoPlanejFamiliar =
      this.participaGrupoPlanejFamiliarComponent.participaGrupoPlanejFamiliar;  
      
    this.prontuario.questionario.porqueProcurouAtendimento =
      this.porqueProcurouAtendimentoComponent.porqueProcurouAtendimento;
      
    this.prontuario.questionario.cartaoVacinacao = 
      this.cartaoVacinacaoComponent.cartaoVacinacao;

    this.prontuario.questionario.atividadeFisica =
      this.atividadeFisicaComponent.atividadeFisica;

    this.prontuario.questionario.sabiaHomemPodeRealizarConsultaPreNatal =
      this.sabiaHomemPodeRealizarConsultaPreNatalComponent.sabiaHomemPodeRealizarConsultaPreNatal;

    this.prontuario.questionario.testeRapidoHepatite =
      this.testeRapidoHepatiteComponent.testeRapidoHepatite;

    this.prontuario.questionario.testeRapidoHiv =
      this.testeRapidoHivComponent.testeRapidoHiv;

    this.prontuario.questionario.testeRapidoSifilis =
      this.testeRapidoSifilisComponent.testeRapidoSifilis;

    this.prontuario.questionario.procurouAtendSaude =
      this.ultimaVezProcAtenSaudeComponent.procurouAtendSaude;
  }

  carregarComposicaoProntuarioEditar(prontuario: Prontuario) {
    if (prontuario.questionario.falarSaudeComHomemOuMulher != null) {
      this.falarSaudeComHomemOuMulherComponent.falarSaudeComHomemOuMulher = 
        prontuario.questionario.falarSaudeComHomemOuMulher;
    }  

    if (prontuario.questionario.acuidadeVisual != null) {
      this.acuidadeVisualComponent.acuidadeVisual = prontuario.questionario.acuidadeVisual;
    }      

    if (prontuario.questionario.alergia != null) {
      this.alergiaComponent.alergia = prontuario.questionario.alergia;
    }    

    if (prontuario.questionario.ultimoAnoProblemaSaudeNaoProcurouAtendimento != null) {
      this.algumProbSaudeNaoProcAtendComponent.ultimoAnoProblemaSaudeNaoProcurouAtendimento = 
        prontuario.questionario.ultimoAnoProblemaSaudeNaoProcurouAtendimento;  
    }  

    if (prontuario.questionario.comoResolveuTratouEsteProblema != null) {
      this.comoResolveuTratouEsteProblemaComponent.comoResolveuTratouEsteProblema = 
        prontuario.questionario.comoResolveuTratouEsteProblema;
    }  

    if (prontuario.questionario.quandoConsultouDentista != null) {
      this.quandoConsultouDentistaComponent.quandoConsultouDentista =
        prontuario.questionario.quandoConsultouDentista;
    }  

    if (prontuario.questionario.consultouUrologista != null) {
      this.consultouUrologistaComponent.consultouUrologista =
        prontuario.questionario.consultouUrologista;
    }  

    if (prontuario.questionario.deficiencia != null) {
      this.deficienciaComponent.deficiencia =
        prontuario.questionario.deficiencia;
    }  

    if (prontuario.questionario.tabagismo != null) {
      this.tabagismoComponent.tabagismo =
        prontuario.questionario.tabagismo;  
    }  

    if (prontuario.questionario.vasectomia != null) {
      this.vasectomiaComponent.vasectomia = prontuario.questionario.vasectomia;
    }  
     
    if (prontuario.questionario.bebidaAlcoolica != null) {
      this.bebidaAlcoolicaComponent.bebidaAlcoolica =
        prontuario.questionario.bebidaAlcoolica;
    }  

    if (prontuario.questionario.gostAtendDirecHomemSeuBairro != null) {
      this.gostAtendDirecHomensSeuBairroComponent.gostAtendDirecHomemSeuBairro =
        prontuario.questionario.gostAtendDirecHomemSeuBairro;
    }  

    if (prontuario.questionario.horarioDiferenciadoAtendimento != null) {
      this.horarioDiferenciadoAtendimentoComponent.horarioDiferenciadoAtendimento =
      prontuario.questionario.horarioDiferenciadoAtendimento;
    }

    if (prontuario.questionario.historicoCancer != null) {
     this.historicoCancerComponent.historicoCancer =
       prontuario.questionario.historicoCancer;
    }  

    if (prontuario.questionario.historicoExamesComplementares != null) {
      this.historicoExamesComplementaresComponent.historicoExamesComplementares =
        prontuario.questionario.historicoExamesComplementares;
    }  

    if (prontuario.questionario.violencia != null) {
      this.ViolenciaComponent.violencia =
        prontuario.questionario.violencia;
    }

    if (prontuario.questionario.teveProblemasGastricos != null) {
      this.problemasGastricosComponent.teveProblemasGastricos =
        prontuario.questionario.teveProblemasGastricos;
    }  

    if (prontuario.questionario.teveProblemasRenais != null) {
      this.problemasRenaisComponent.teveProblemasRenais =
        prontuario.questionario.teveProblemasRenais;
    }  

    if (prontuario.questionario.teveProblemasRespiratorios != null) {
      this.problemasRespiratoriosComponent.teveProblemasRespiratorios =
        prontuario.questionario.teveProblemasRespiratorios;
    }  

    if (prontuario.questionario.motivoNaoProcurarAtendimento != null) {
      this.motivoNaoProcurarAtendimentoComponent.motivoNaoProcurarAtendimento =
        prontuario.questionario.motivoNaoProcurarAtendimento;
    }

    if (prontuario.questionario.participaGrupoPlanejFamiliar != null) {
      this.participaGrupoPlanejFamiliarComponent.participaGrupoPlanejFamiliar =
        prontuario.questionario.participaGrupoPlanejFamiliar;  
    }  
      
    if (prontuario.questionario.porqueProcurouAtendimento != null) {
      this.porqueProcurouAtendimentoComponent.porqueProcurouAtendimento =
        prontuario.questionario.porqueProcurouAtendimento;
    }
    
    if (prontuario.questionario.cartaoVacinacao != null) {
      this.cartaoVacinacaoComponent.cartaoVacinacao = 
        prontuario.questionario.cartaoVacinacao;
    }  
      
    if (prontuario.questionario.atividadeFisica != null) {
      this.atividadeFisicaComponent.atividadeFisica =
        prontuario.questionario.atividadeFisica;
    }  

    if (prontuario.questionario.sabiaHomemPodeRealizarConsultaPreNatal != null) {
      this.sabiaHomemPodeRealizarConsultaPreNatalComponent.sabiaHomemPodeRealizarConsultaPreNatal =
        prontuario.questionario.sabiaHomemPodeRealizarConsultaPreNatal;
    }  

    if (prontuario.questionario.testeRapidoHepatite != null) {
      this.testeRapidoHepatiteComponent.testeRapidoHepatite =
        prontuario.questionario.testeRapidoHepatite;
    }  

    if (prontuario.questionario.testeRapidoHiv != null) {
      this.testeRapidoHivComponent.testeRapidoHiv =
        prontuario.questionario.testeRapidoHiv;
    }  

    if (prontuario.questionario.testeRapidoSifilis != null) {
      this.testeRapidoSifilisComponent.testeRapidoSifilis =
        prontuario.questionario.testeRapidoSifilis;
    }  

    if (prontuario.questionario.procurouAtendSaude != null) {
      this.ultimaVezProcAtenSaudeComponent.procurouAtendSaude =
        prontuario.questionario.procurouAtendSaude;
    }  
  }  

  limparMatriciamento() {
    this.prontuario.questionario.consultaEquipeSaudeFamiliaMatriciamento = '';
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
      changeEvent.preventDefault();
  }  
}