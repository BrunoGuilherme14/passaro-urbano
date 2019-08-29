import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraModel } from '../shared/ordem-compra.model';
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { CarrinhoService } from '../services/carrinho.service';
import { OrdemCompraService } from '../services/ordem-compra.service';

@Component({
  selector: 'app-pedido-reactive-forms',
  templateUrl: './pedido-reactive-forms.component.html',
  styleUrls: ['./pedido-reactive-forms.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class PedidoReactiveFormsComponent implements OnInit {
  public carrinho: ItemCarrinho[];
  public idPedido:number;
  public formPedido: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'numero': new FormControl(null, [Validators.required, Validators.pattern("[0-9]+")]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required]),
  });
  constructor(private ordemCompraService: OrdemCompraService, public carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.carrinho = this.carrinhoService.getCarrinho();
  }
  public realizarCompra(): void {
    this.formPedido.markAllAsTouched();
    if(this.formPedido.valid && this.carrinhoService.getTotal()) {
      const pedidoCompleto: OrdemCompraModel = new OrdemCompraModel(this.formPedido.value.id, this.formPedido.value.endereco, this.formPedido.value.numero, this.formPedido.value.complemento, this.formPedido.value.formaPagamento, this.carrinhoService.getCarrinho());
      this.ordemCompraService.realizarCompra(pedidoCompleto).subscribe(
        (res: OrdemCompraModel) => {
          this.idPedido = res.id;
        },
        (error:Error) => {
          console.log(error);
        }
      )
    }
  }
  public novoPedido() :void {
    this.carrinho = this.carrinhoService.removeCarrinho(null);
    this.formPedido.reset();
    this.idPedido  = undefined;
  }
  public addItemCarrinho(item: ItemCarrinho):void {
    this.carrinhoService.setCarrinho(item);
  }
  public removeItemCarrinho(item: ItemCarrinho):void {
    this.carrinhoService.removeCarrinho(item);
  }
}
