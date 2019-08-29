import { Injectable } from '@angular/core';
import { OrdemCompraModel } from '../shared/ordem-compra.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrdemCompraService {
    constructor(private http: HttpClient){}
    public realizarCompra(pedido: OrdemCompraModel): Observable<OrdemCompraModel> {
        const url = `${environment.baseUrl}pedidos`;
        return this.http.post(url, JSON.stringify(pedido), {headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(
            retry(5),
            map((res:OrdemCompraModel)=> res)
        )
    }
}