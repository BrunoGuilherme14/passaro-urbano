import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OndeFicaService } from '../../services/onde.fica.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [
    OndeFicaService
  ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';
  constructor(private route:ActivatedRoute, private ondeFicaService: OndeFicaService) { }

  ngOnInit() {
    this.route.parent.params.subscribe( (params: Params) => {
      this.ondeFicaService.getOndeFica(params['id']).then((descricao:string)=>{
        this.ondeFica = descricao;
      })
    })
  }
}