import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ComoUsarService } from '../../services/como.usar.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [
    ComoUsarService
  ]
})
export class ComoUsarComponent implements OnInit {
  
  public comoUsar: string = '';
  constructor(private route:ActivatedRoute, private comoUsarService: ComoUsarService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params:Params) => {
      this.comoUsarService.getComoUsar(params['id']).then((descricao:string)=>{
        this.comoUsar = descricao;
      })
    })
  }
}
