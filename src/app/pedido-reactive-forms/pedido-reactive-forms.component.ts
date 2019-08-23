import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service';
import { OrdemCompraModel } from '../shared/ordem-compra.model';


@Component({
  selector: 'app-pedido-reactive-forms',
  templateUrl: './pedido-reactive-forms.component.html',
  styleUrls: ['./pedido-reactive-forms.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class PedidoReactiveFormsComponent implements OnInit {
  public pedido: OrdemCompraModel;
  public formPedido: FormGroup = new FormGroup({
    'endereco': new FormControl(null),
    'numero': new FormControl(null),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null),
  });
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }
  public realizarCompra(): void {
    this.ordemCompraService.realizarCompra(this.pedido).subscribe(
      (res: OrdemCompraModel) => {
        console.log(res)
      },
      (error:Error) => {
        console.log(error)
      }
    )
  }
}
