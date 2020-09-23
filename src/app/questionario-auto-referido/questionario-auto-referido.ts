import { CartaoVacinacao } from './cartao-vacinacao/cartao-vacinacao';
import { Alergia } from './alergia/alergia';
import { MotivoNaoProcurarAtendimento } from './motivo-nao-procurar-atendimento/motivo-nao-procurar-atendimento';
import { ProcurouAtendimentoSaude } from '../enums/procurou-atendimento-saude.enum';
import { ComoResolveuTratouEsteProblema } from './como-resolveu-tratou-este-problema/como-resolveu-tratou-este-problema';
import { AcuidadeVisual } from './acuidade-visual/acuidade-visual';
import { Deficiencia } from './deficiencia/deficiencia';
import { BebidaAlcoolica } from './bebida-alcoolica/bebida-alcoolica';
import { AtividadeFisica } from './atividade-fisica/atividade-fisica';
import { Tabagismo } from './tabagismo/tabagismo';
import { Vasectomia } from './vasectomia/vasectomia';
import { HorarioDiferenciadoAtendimento } from './horario-diferenciado-atendimento/horario-diferenciado-atendimento';
import { HistoricoCancer } from './historico-cancer/historico-cancer';
import { Violencia } from './violencia/violencia';
import { ParticipaGrupoPlanejFamiliar } from './participa-grupo-planej-familiar/participa-grupo-planej-familiar';
import { PorqueProcurouAtendimento } from './porque-procurou-atendimento/porque-procurou-atendimento';
import { FalarSaudeComHomemOuMulher } from './falar-saude-com-homem-ou-mulher/falar-saude-com-homem-ou-mulher';
import { PeriodoConsultouDentista } from '../enums/periodo-consultou-dentista.enum';

export class QuestionarioAutoReferido {
    acuidadeVisual = new AcuidadeVisual();
    alergia = new Alergia();
    atividadeFisica = new AtividadeFisica();
    bebidaAlcoolica = new BebidaAlcoolica();
    cartaoVacinacao = new CartaoVacinacao();
    comoResolveuTratouEsteProblema = new ComoResolveuTratouEsteProblema();
    consultouUrologista: boolean;
    deficiencia = new Deficiencia();
    falarSaudeComHomemOuMulher = new FalarSaudeComHomemOuMulher();
    gostAtendDirecHomemSeuBairro: boolean;
    historicoCancer = new HistoricoCancer();
    historicoExamesComplementares: string;
    horarioDiferenciadoAtendimento = new HorarioDiferenciadoAtendimento();
    motivoNaoProcurarAtendimento = new MotivoNaoProcurarAtendimento();
    participaGrupoPlanejFamiliar = new ParticipaGrupoPlanejFamiliar();
    porqueProcurouAtendimento = new PorqueProcurouAtendimento();
    teveProblemasGastricos: boolean;
    teveProblemasRenais: boolean;
    teveProblemasRespiratorios: boolean;
    quandoConsultouDentista: PeriodoConsultouDentista;
    sabiaHomemPodeRealizarConsultaPreNatal: boolean;
    tabagismo = new Tabagismo();
    testeRapidoHepatite: boolean;
    testeRapidoHiv: boolean;
    testeRapidoSifilis: boolean;    
    procurouAtendSaude: ProcurouAtendimentoSaude;

    vasectomia = new Vasectomia();
    violencia = new Violencia();

    ultimoAnoProblemaSaudeNaoProcurouAtendimento: boolean;

    atualizacaoVacina: boolean;
    consultaNutricionista: boolean;
    consultaOftalmologista: boolean;

    consultaEquipeSaudeFamilia: string;
    consultaEquipeSaudeFamiliaMatriciamento: string;
}