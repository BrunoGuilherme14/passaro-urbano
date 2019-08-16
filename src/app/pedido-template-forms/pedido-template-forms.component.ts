import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pedido-template-forms',
  templateUrl: './pedido-template-forms.component.html',
  styleUrls: ['./pedido-template-forms.component.css']
})
export class PedidoTemplateFormsComponent implements OnInit {

  constructor() { }
  @ViewChild('formPedido', {static: false}) public formPedido: NgForm;
  ngOnInit() {
  }
  public realizarCompra(): void {
    console.log(this.formPedido);
  }
} 
