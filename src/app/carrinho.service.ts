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
    public getCarrinho(): ItemCarrinho[] {
        return this.itemCarrinho;
    }
    public setCarrinho(item:ItemCarrinho): void {
        const indexItemCarrinho = this.itemCarrinho.map(v=>v.id).indexOf(item.id);
        if(indexItemCarrinho == -1) {
            this.itemCarrinho.push(item);
        } else {
            this.itemCarrinho[indexItemCarrinho].quantidade += 1;
        }
    }
    public removeCarrinho(item:ItemCarrinho): void {
        if(item) {
            const indexItemCarrinho = this.itemCarrinho.map(v=>v.id).indexOf(item.id);
            this.itemCarrinho[indexItemCarrinho].quantidade > 0? this.itemCarrinho[indexItemCarrinho].quantidade -= 1 : ''
        } else {
            this.itemCarrinho = [];
        }
    }
    public getTotal(): number {
        let total:number = 0;
        for(let item of this.itemCarrinho) {
            for(let i=0; i < item.quantidade; i++) {
                total += item.valor
            }
        }
        return total;
    }
}