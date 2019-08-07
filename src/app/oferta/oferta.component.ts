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
    let id:number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ofertasService.getOferta(id).then((res:Ofertas) => {
      this.oferta = res;
    })
  }
}
