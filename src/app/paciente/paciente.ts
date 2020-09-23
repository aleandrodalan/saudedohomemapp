import { Pessoa } from '../pessoa/pessoa';
import { Endereco } from '../endereco/endereco';
import { DadosSocioDemograficos } from '../dados-socio-demograficos/dados-socio-demograficos';

export class Paciente {
    id: number;
    idade: number;
    numeroCartaoSus: string;    
    pessoa = new Pessoa();
    dadosSocioDemograficos = new DadosSocioDemograficos();
    endereco = new Endereco();
}