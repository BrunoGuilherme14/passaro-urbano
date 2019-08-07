import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ofertas } from './shared/ofertas.model';
import {URL_API}  from './url.api';

@Injectable()
export class OfertasService {
    constructor(private http:HttpClient) {}
    public getOferta(id:number) : Promise<Ofertas> {
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((res:any) => res.shift())
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
        let urlRequest = URL_API;
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