import { RacaCor } from '../enums/raca-cor.enum';
import { Escolaridade } from '../enums/escolaridade.enum';
import { EstadoCivil } from '../enums/estado-civil.enum';
import { OrientacaoSexual } from '../enums/orientacao-sexual.enum';

export class DadosSocioDemograficos {
    nomeSocial: string;
    racaCor: RacaCor;
    escolaridade: Escolaridade;
    estadoCivil: EstadoCivil;
    orientacaoSexual: OrientacaoSexual;
    qualOrientacaoSexual: string;
    ocupacaoAtual: string;
    nomeMae: string;
}