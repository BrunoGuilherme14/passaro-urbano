import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_API } from './url.api';

@Injectable()
export class ComoUsarService {
    constructor(private http: HttpClient){}
    public getComoUsar(id:number): Promise<string> {
        const url = `${BASE_URL_API}como-usar?id=${id}`;
        return this.http.get(url)
            .toPromise()
            .then((res:any) => res.shift().descricao);
    }
}