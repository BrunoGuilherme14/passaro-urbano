import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class ComoUsarService {
    constructor(private http: HttpClient){}
    public getComoUsar(id:number): Promise<string> {
        const url = `${environment.baseUrl}como-usar?id=${id}`;
        return this.http.get(url)
            .toPromise()
            .then((res:any) => res.shift().descricao);
    }
}