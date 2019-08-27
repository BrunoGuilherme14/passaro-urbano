import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho.model';
import { BASE_URL_API } from './url.api';
import { retry, map } from 'rxjs/operators';

@Injectable()
export class CarrinhoService {
    public itemCarrinho: ItemCarrinho[] = [];
    
    constructor(private httpClient: HttpClient){}
    public addOferta(obj: ItemCarrinho): void {
        this.httpClient.post(`${BASE_URL_API}carrinho`, obj, {headers: new HttpHeaders({'Content-Type': 'application/json'})})
        .pipe(
            retry(5),
            map((res: ItemCarrinho) => {
                console.log("Sucesso: ",res);
            })
        )
    }
}