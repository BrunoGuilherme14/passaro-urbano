import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import {Ofertas} from '../shared/ofertas.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {
  public ofertas: Ofertas[];
  constructor(private ofertasService: OfertasService) { }
  ngOnInit() {
    this.ofertasService.getOfertasAsync(false, 'diversao').then((res:Ofertas[]) => {
      this.ofertas = res;
    })
  }
}
