import { Paciente } from '../paciente/paciente';
import { UnidadeSaude } from '../unidade-saude/unidade-saude';
import { QuestionarioAutoReferido } from '../questionario-auto-referido/questionario-auto-referido';
import { AcuidadeVisual } from '../questionario-auto-referido/acuidade-visual/acuidade-visual';

export class Prontuario {
    id: number;
    dataColeta: string;
    peso: string;
    altura: string;
    imc: string;
    circunferenciaAbdominal: string;
    pressaoArterial: string;
    colesterol: string;
    tsh: string;
    indiceGlicemico: string;
    frequenciaCardiaca: string;
    psa: string;
    frequenciaRespiratoria: string;
    paciente = new Paciente();
    unidadeSaude = new UnidadeSaude();
    acuidadeVisual = new AcuidadeVisual();
    questionario = new QuestionarioAutoReferido();
}