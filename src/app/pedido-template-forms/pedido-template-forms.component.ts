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
  public submitted:boolean = false;

  constructor(private ordemCompraService: OrdemCompraService) { }
  @ViewChild('formPedido', {static: false}) public formPedido: NgForm;
  
  ngOnInit() {}
  onSubmit() { this.submitted = true}

  public realizarCompra(): void {
    let formPedido: OrdemCompraModel = this.formPedido.form.value;
    console.log(this.formPedido.form)
    if(this.formPedido.form.valid) {
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
} 
