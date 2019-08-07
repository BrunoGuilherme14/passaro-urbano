import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OndeFicaService } from 'src/app/onde.fica.service';

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
    const paramParent = this.route.parent.snapshot.params['id'];
    this.ondeFicaService.getOndeFica(paramParent).then((descricao:string)=>{
      this.ondeFica = descricao;
    })
  }
}