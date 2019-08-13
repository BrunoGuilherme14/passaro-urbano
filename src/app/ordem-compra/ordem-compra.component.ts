import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  constructor() { }
  public endereco: string = 's'
  public numero: number;
  public complemento: string = 'ss'
  public formaPagamento:string = 'ssss'

  ngOnInit() {
  }
  public atualizaEndereco(endereco:string) :void {
    this.endereco = endereco;
    console.log(this.endereco)
  }
  public atualizaNumero(numero:number) : void {
    this.numero = numero
  }
  public atualizaComplemento(complemento:string): void {
    this.complemento = complemento;
  }
  public atualizaFormaPagamento(formaPagamento:string) : void {
    this.formaPagamento = formaPagamento
    console.log(this.formaPagamento)
  }
}
