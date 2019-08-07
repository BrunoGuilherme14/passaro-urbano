import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Ofertas } from '../shared/ofertas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    OfertasService
  ]
})
export class HomeComponent implements OnInit {
  public ofertas: Array<Ofertas>;
  constructor(private ofertasService: OfertasService, private router:Router) { }

  ngOnInit() {
    this.ofertasService.getOfertasAsync(true, '')
      .then((res: Ofertas[]) => {
        this.ofertas = res
      })
      .catch( (error:any) => {
        console.log(error);
      })
  }
}
