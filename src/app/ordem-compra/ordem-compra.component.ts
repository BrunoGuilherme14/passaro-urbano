import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: OrdemCompraService) { }
  public endereco: string = ''
  public numero: number
  public complemento: string = ''
  public formaPagamento:string = ''

// Atributos de validação 

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

// Controle de ativação do botão submit
  public botaoForm: string = 'disabled';

  ngOnInit() {
    console.log(this.ordemCompraService.realizarCompra());
  }
  public atualizaEndereco(endereco:string) :void {
    this.endereco = endereco;
    this.enderecoValido = (this.endereco.length > 3);
    this.habilitaForm();
  }
  public atualizaNumero(numero:number) : void {
    this.numero = numero
    this.numeroValido = (this.numero > 0);
    this.habilitaForm();
  }
  public atualizaComplemento(complemento:string): void {
    this.complemento = complemento;
    this.complementoValido = (this.complemento.length > 0);
    this.habilitaForm();
  }
  public atualizaFormaPagamento(formaPagamento:string) : void {
    this.formaPagamento = formaPagamento
    this.formaPagamentoValido = (this.formaPagamento.length > 0);
    this.habilitaForm();
  }

  public habilitaForm():void{
    this.botaoForm = (this.numeroValido && this.enderecoValido && this.formaPagamentoValido? '' : 'disabled');
  }
}
