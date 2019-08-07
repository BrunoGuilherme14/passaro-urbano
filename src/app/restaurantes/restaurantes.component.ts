import { Component, OnInit } from '@angular/core';
import { Ofertas } from '../shared/ofertas.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {
  public ofertas: Ofertas[];
  constructor(private ofertasService: OfertasService) { }
  ngOnInit() {
    this.ofertasService.getOfertasAsync(false, 'restaurante').then((res:Ofertas[])=>{
      this.ofertas = res;
    })
  }
}
