import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraModel } from '../shared/ordem-compra.model';
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-pedido-template-forms',
  templateUrl: './pedido-template-forms.component.html',
  styleUrls: ['./pedido-template-forms.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class PedidoTemplateFormsComponent implements OnInit {
  public carrinho: ItemCarrinho[];
  public idPedido: number;
  constructor(private ordemCompraService: OrdemCompraService, public carrinhoService: CarrinhoService) { }
  @ViewChild('formPedido', {static: false}) public formPedido: NgForm;
  
  ngOnInit() {
    this.carrinho = this.carrinhoService.getCarrinho();
  }

  public realizarCompra(): void {
    let formPedido: OrdemCompraModel = this.formPedido.form.value;
    this.formPedido.form.markAllAsTouched();
    if(this.formPedido.form.valid  && this.carrinhoService.getTotal()) {
      this.ordemCompraService.realizarCompra(formPedido).subscribe(
        (res:OrdemCompraModel) => {
          this.idPedido = res.id;
        },
        (error: Error) => {
          console.log(error)
        }
      )
    }
    
  }
  public novoPedido() :void {
    this.idPedido  = undefined;
  }
  public addItemCarrinho(item: ItemCarrinho):void {
    this.carrinhoService.setCarrinho(item);
  }
  public removeItemCarrinho(item: ItemCarrinho):void {
    this.carrinhoService.removeCarrinho(item);
  }
} 
