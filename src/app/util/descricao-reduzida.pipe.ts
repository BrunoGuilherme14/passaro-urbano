import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "descricaoReduzida"
})
export class DescricaoReduzida implements PipeTransform{
    transform(value: string, ...args: any[]) {
        return value.length > args[0]? value.substr(0,args[0]) + "..." : value;
    }
    
}