import { Component } from '@angular/core';
import { CartaoVacinacao } from './cartao-vacinacao';

@Component({
  selector: 'app-cartao-vacinacao',
  templateUrl: './cartao-vacinacao.component.html',
  styleUrls: ['./cartao-vacinacao.component.css']
})
export class CartaoVacinacaoComponent {

  cartaoVacinacao: CartaoVacinacao;

  constructor() {
    this.novo();
  }

  marcarNao() {
    this.novo();
    this.cartaoVacinacao.possuiCartao = false;
  }

  private novo() {
    this.cartaoVacinacao = new CartaoVacinacao();    
  }
}