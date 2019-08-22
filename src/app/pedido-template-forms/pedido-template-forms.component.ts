import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraModel } from '../shared/ordem-compra.model';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'app-pedido-template-forms',
  templateUrl: './pedido-template-forms.component.html',
  styleUrls: ['./pedido-template-forms.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class PedidoTemplateFormsComponent implements OnInit {
  public idPedido: number;
  constructor(private ordemCompraService: OrdemCompraService) { }
  @ViewChild('formPedido', {static: false}) public formPedido: NgForm;
  ngOnInit() {
  }
  public realizarCompra(): void {
    const formPedido: OrdemCompraModel = this.formPedido.form.value;
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
