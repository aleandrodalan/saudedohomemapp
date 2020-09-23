import { Pessoa } from '../pessoa/pessoa';
import { Status } from '../enums/status.enum';
import { GrupoAcesso } from '../enums/grupo-acesso.enum';

export class Usuario {
    id: number;
    pessoa: Pessoa;
    login: string;
    senha: string;
    repetirSenha: string;
    status: Status;
    grupo: GrupoAcesso;

    constructor() {
        this.pessoa = new Pessoa();
    }
}