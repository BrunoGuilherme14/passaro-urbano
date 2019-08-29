import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ofertas } from '../shared/ofertas.model';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class OfertasService {
    constructor(private http:HttpClient) {}
    public getOferta(id:number) : Promise<Ofertas> {
        return this.http.get(`${environment.baseUrl}ofertas?id=${id}`)
            .toPromise()
            .then((res:any) => res.shift())
    }
    public getOfertasObsByTermo(termo:string) : Observable<Ofertas[]> {
        let urlRequest = `${environment.baseUrl}ofertas?descricao_oferta_like=${termo}`;
        return this.http.get(urlRequest).pipe(
            retry(5),
            map((res:Ofertas[]) => res)
        )
    }
    public getOfertasAsync(destaque:boolean, categoria: string): Promise<Ofertas[]> {
        const objParameters = [
            {
                name: 'destaque',
                value: destaque
            },
            {
                name: 'categoria',
                value: categoria
            }
        ];
        let urlRequest = environment.baseUrl + 'ofertas';
        let indexRequest = 0;
        for(let parameter of objParameters) {
            if(parameter.value) {
                let divider = indexRequest == 0 ? "?":"&";
                urlRequest += divider + parameter.name +"="+ parameter.value;
                indexRequest++;
            }
        }

        return this.http.get(urlRequest)
            .toPromise()
            .then((res:any) => res)
    }
}