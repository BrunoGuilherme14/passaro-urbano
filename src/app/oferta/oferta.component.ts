import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ofertas } from '../shared/ofertas.model';
import { OfertasService } from '../services/ofertas.service';
import { CarrinhoService } from '../services/carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

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
  constructor(private route: ActivatedRoute, private ofertasService:OfertasService, public carrinhoService:CarrinhoService) { }
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
  public addCarrinho(): void {
    const itemCarrinho: ItemCarrinho = new ItemCarrinho(this.oferta.id, this.oferta.imagens[0], this.oferta.titulo, this.oferta.descricao_oferta, this.oferta.valor, 1);
    this.carrinhoService.setCarrinho(itemCarrinho);
  }
}
