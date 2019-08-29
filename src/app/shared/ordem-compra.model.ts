import { Optional } from '@angular/core';
import { ItemCarrinho } from './item-carrinho.model';

export class OrdemCompraModel {
    constructor(
        @Optional() public id: number,
        public endereco:string,
        public numero:number,
        public complemento:string,
        public formaPagamento:string,
        public pedido: ItemCarrinho[]
    ){}
}