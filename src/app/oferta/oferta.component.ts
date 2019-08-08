import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Ofertas } from '../shared/ofertas.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaComponent implements OnInit {
  public oferta: Ofertas;
  constructor(private route: ActivatedRoute, private ofertasService:OfertasService) { }
  ngOnInit() {
    /* Via Snapshot ao navegar apenas mudando o parâmetro da rota, os componentes não recarregam. */
    //let id:number = parseInt(this.route.snapshot.paramMap.get('id'));

    /* Solução é utilizar Observables */
    this.route.params.subscribe(routeParams => {
      this.ofertasService.getOferta(routeParams.id).then((res:Ofertas) => {
        this.oferta = res;
      })
    });
    
  }
}
