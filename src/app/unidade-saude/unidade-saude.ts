import { Endereco } from '../endereco/endereco';

export class UnidadeSaude {
    id: number;
    nome: string;
    telefone: string;
    endereco = new Endereco();
}