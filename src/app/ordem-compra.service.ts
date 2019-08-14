import { Injectable } from '@angular/core';
import { OrdemCompraModel } from './shared/ordem-compra.model';

@Injectable()
export class OrdemCompraService {
    public realizarCompra(): OrdemCompraModel[] {
        return [
            {
                numero: 10,
                endereco: "Teste rua",
                complemento: 'teste',
                formaPagamento: "dinheiro"
            }
        ]
    }
}