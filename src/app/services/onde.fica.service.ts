import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class OndeFicaService {
    constructor(private http: HttpClient){}
    public getOndeFica(id: number): Promise<string> {
        const url = `${environment.baseUrl}onde-fica?id=${id}`
        return this.http.get(url)
            .toPromise()
            .then((res:any) => {
                return res.shift().descricao;
        })
    }
}