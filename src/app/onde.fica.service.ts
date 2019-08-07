import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BASE_URL_API } from './url.api';

@Injectable()
export class OndeFicaService {
    constructor(private http: HttpClient){}
    public getOndeFica(id: number): Promise<string> {
        const url = `${BASE_URL_API}onde-fica?id=${id}`
        return this.http.get(url)
            .toPromise()
            .then((res:any) => {
                return res.shift().descricao;
        })
    }
}