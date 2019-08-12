import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Subject, Observable, of } from 'rxjs';
import { Ofertas } from '../shared/ofertas.model';
import { debounceTime, switchMap, distinctUntilChanged, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }
  
  private termoSubject: Subject<string> = new Subject<string>();
  public ofertas: Ofertas[] = [];

  public pesquisaTermo(termo:string) : void {
    this.termoSubject.next(termo);
  }
  public limpaCampo(inputBusca:HTMLInputElement):void {
    inputBusca.value = '';
    this.termoSubject.next(inputBusca.value);
  }

  ngOnInit() {
    this.termoSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(termo => {
        return (termo.trim().length)? this.ofertasService.getOfertasObsByTermo(termo): of<Ofertas[]>([])
      }),
      catchError(val => of<Ofertas[]>([]))
    ).subscribe(
      (res:Ofertas[]) => this.ofertas = res,
      ((res:Error) => console.log(res))
    );
  }
}