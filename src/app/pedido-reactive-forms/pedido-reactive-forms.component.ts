import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public idPedido:number;
  public submitted: boolean = false;
  public formPedido: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'numero': new FormControl(null, [Validators.required, Validators.pattern("[0-9]+")]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required]),
  });
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }
  public realizarCompra(): void {
    this.submitted = true;
    if(this.formPedido.valid) {
      this.ordemCompraService.realizarCompra(this.formPedido.value).subscribe(
        (res: OrdemCompraModel) => {
          this.idPedido = res.id;
        },
        (error:Error) => {
          console.log(error)
        }
      )
    }
  }
  public novoPedido() :void {
    this.formPedido.reset();
    this.idPedido  = undefined;
  }
}
