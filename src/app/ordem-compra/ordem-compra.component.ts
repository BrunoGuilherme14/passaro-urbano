import { Component, OnInit, Optional } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { OrdemCompraModel } from '../shared/ordem-compra.model';
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: OrdemCompraService, public carrinhoService: CarrinhoService) { }
  public carrinho: ItemCarrinho[];
  public pedido: OrdemCompraModel;

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

// Atibuto para componente de sucesso
  public idPedido: number;

  ngOnInit() {
    this.carrinho = this.carrinhoService.getCarrinho();
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

  public confirmarCompra(): void {
    this.pedido = new OrdemCompraModel(Optional() ,this.endereco, this.numero, this.complemento, this.formaPagamento, this.carrinhoService.getCarrinho());
    this.ordemCompraService.realizarCompra(this.pedido).subscribe(
      (res:OrdemCompraModel) => {
        this.idPedido = res.id;
      },
      ((res:Error) => console.log(res))
    );
  }
  public novoPedido() :void {
    this.carrinho = this.carrinhoService.removeCarrinho(null);
    this.idPedido  = undefined;
  }
  public addItemCarrinho(item: ItemCarrinho):void {
    this.carrinhoService.setCarrinho(item);
  }
  public removeItemCarrinho(item: ItemCarrinho):void {
    this.carrinhoService.removeCarrinho(item);
  }
}
