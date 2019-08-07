import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Subject } from 'rxjs';
import { Ofertas } from '../shared/ofertas.model';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';

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

  pesquisaTermo(termo:string) : void {
    this.termoSubject.next(termo);
  }

  ngOnInit() {
    this.termoSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(termo => {
        if(termo.length) return this.ofertasService.getOfertasObsByTermo(termo);
        return this.ofertas = [];
      })
    ).subscribe((res:Ofertas[]) => this.ofertas = res);
  }
}
