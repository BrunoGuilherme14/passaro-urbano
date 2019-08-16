import { Optional } from '@angular/core';

export class OrdemCompraModel {
    constructor(
        @Optional() public id: number,
        public endereco:string,
        public numero:number,
        public complemento:string,
        public formaPagamento:string
    ){}
}